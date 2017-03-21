// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

//add a new argument to getElementsByClassName
var getElementsByClassName = function(className, node
) {

// initializing
  var output=[];
  var node = node || document.body; 

  //if node has the correct class Name
    if ( $(node).hasClass(className) ) {
      output.push(node);
    }

  // Recurse whole function in a for loop if there are children
    if (node.children.length>0) {
      var childOutput=[];
      
      for ( var i=0; i<node.children.length; i++ ) { 
        //console.log(node.children[i]);
        childOutput = childOutput.concat( getElementsByClassName( className, node.children[i] ) );
      }

        output = output.concat(childOutput);
    }
  
  //Return output
  return output;
};
