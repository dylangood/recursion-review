// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var string = '';
  // Handle unstringifiable stuff
  //   Functions or Undefined
  if ( 'function' === typeof obj || 'undefined' === obj ){
    return;
  }   

  // Recurse the function for collections
  if ( Array.isArray(obj) ) {
    for ( var i = 0; i < obj.length; i++ ) {
      string = string + stringifyJSON(obj[i]) + ( i < obj.length - 1  ? ',' : '' );
    }
    string = '[' + string + ']';
    return string;
  }

  //   Null object requires special case
  if( null === obj ) {
    return 'null';
  }

  //   put commas between collection elements
  if ( 'object' === typeof obj ) {
    for ( var k in obj ) {
      if ( obj[k] === undefined || 'function' === typeof obj[k] ) { continue; }
      string = string + stringifyJSON(k) + ':' + stringifyJSON(obj[k]) + ',';
    }
    string = '{' + string.slice(0, -1) + '}';
    return string;
  }

  //   Strings need special case ""
  if( 'string' === typeof obj ) {
    return '"' + obj + '"';
  }

  // For easy types, just stringify
  string += '' + obj;

  return string;
};
