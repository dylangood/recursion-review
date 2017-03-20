// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {

// initializing
  var output=[]; CurrentNode=document.body;   
//inner find function
  function findClassInNode(node) {
  //if node has the correct class Name
    if ( $(node).hasClass(className) ) {
      output.push(node);
    }

  // Recurse inner function in a for loop if there are children
    if (node.children) {
      for ( var i=0; i<node.children.length; i++ ) { 
        findClassInNode( node.children[i] );
      }
    }
  }
  //call inner function on body 
  findClassInNode(CurrentNode);
  //Return output
  return output;
};
