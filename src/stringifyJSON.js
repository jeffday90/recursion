// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'undefined' || obj === undefined || typeof obj === 'function' || typeof obj === 'null' || obj === null || typeof obj === 'symbol') {
    return 'null';
  }
  if (typeof obj === 'boolean' || typeof obj === 'number') {
    return obj.toString();
  }
  if (typeof obj === 'string') {
    return `"${obj}"`;
  }
  if (Array.isArray(obj)) {
    var newArr = [];

    for (var i = 0; i < obj.length; i++) {
      newArr.push(stringifyJSON(obj[i]));
    }
    return `[${newArr.toString()}]`;
  }
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