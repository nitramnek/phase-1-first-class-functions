//k3n5c0d3
// takes a callback function as an argument
function receivesAFunction(callback) {
    callback();
}

// takes no arguments and returns a named function
function returnsANamedFunction() {
    function namedFunction() {
    }
    return namedFunction;
  }

// takes no arguments and returns an anonymous function
function returnsAnAnonymousFunction() {
    return function () {};
  }