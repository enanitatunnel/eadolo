// binding.js

// Dummy code for creating a binding file

// Create a binding for a function
function createBinding(func) {
  return function() {
    console.log("Binding created for function:", func.name);
    return func.apply(this, arguments);
  };
}

// Example usage
function greet(name) {
  console.log("Hello, " + name);
}

let boundGreet = createBinding(greet);
boundGreet("John");
