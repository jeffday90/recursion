// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

//The getElementsByClassName() method returns a collection of all elements in the document with the specified class name, as a NodeList object.
//
//The NodeList object represents a collection of nodes. The nodes can be accessed by index numbers. The index starts at 0.
//
//Tip: You can use the length property of the NodeList object to determine the number of elements with a specified class name, then you can loop through all elements and extract the info you want.

//A NodeList object, representing a collection of elements with the specified class name. The elements in the returned collection are sorted as they appear in the source code.


var getElementsByClassName = function(className) {
    var result = []; 
    function iterateFunc(node){
        if (node.classList !== undefined && node.classList.contains(className)){
            result.push(node); 
        } else if (node.childNodes.length === 0) {
            return;
        }
        if (node.childNodes !== undefined){
            for (var i = 0; i < node.childNodes.length; i++){
                var childClassList = node.childNodes[i]
                iterateFunc(childClassList);
            }
        }
    }
    //call the func immediately with document(dot)body first
    iterateFunc(document.body);
    return result;
};
