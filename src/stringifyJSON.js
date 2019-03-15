// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

// recursively call stringifyJSON until its broken into a primitive type that can be returned into a string

//look through JSON.stringify mdn and try and figure out the behaviors of the data types (base case)

//for arrays and objects figure out the recursive call 
    
//if undefined in passed in return null
  if (typeof obj === 'undefined' || obj === undefined || typeof obj === 'function' || typeof obj === 'null' || obj === null || typeof obj === 'symbol') {
    return 'null';
  }

//if a boolean is passed in as obj
  if (typeof obj === 'boolean' || typeof obj === 'number') {
    return obj.toString();
  }

//if string is passed in as obj
  if (typeof obj === 'string') {
    return `"${obj}"`;
  }

//array
  if (Array.isArray(obj)) {
    var newArr = [];

    for (var i = 0; i < obj.length; i++) {
      newArr.push(stringifyJSON(obj[i]));
    }
    return `[${newArr.toString()}]`;
  }
//obj = object
  if (typeof obj === 'object' && obj !== null) {
    var objArr = [];
    for (key in obj) {
      if (obj[key] !== undefined && typeof obj[key] !== 'function') {
        objArr.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }

    return `{${objArr.join(',')}}`;
  }    
};