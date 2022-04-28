// FUNCTIONAL PROGRAMMING
// basically entails functions as being "first class values"
// i.e) they can do everything a variable does
// they can be used as values & passed to other functions
// they can also be returned as results from other values
// they can be added to objects -- called methods
// they can be added to arrays too like so
const messages = ["They can be inserted into arrays", message => console.log(message), "like variables"];
// if you see more than one arrow used in an arrow function, know that a "higher-order function is being used"
// "higher-order functions" -- are functions passed as values/arguments to other functions || returned from another function or both
// functions are data. They can be saved, retrieved or flow thro your apps just like variables
// Functional programming is a part of a larger programming paradigm called Declarative programming

// DECLARATIVE PROGRAMMING VS IMPERIAL PROGRAMMING
// Imperial programming
// entails defining "how" a task should happen / "how" to achieve results using code
// entails all the basic steps to achieve a task; for looops,if/else statements....
// you need a lot of comments in your code to understand what's going on in the code

// Declarative programming
// focuses mostly on "what" should happen
// in a declarative program, the syntax itself describes what should happen
// the details of how things happen are abstracted away in the syntax functions/properties & methods
// the code itself describes what is happening
// declarative programming produces applications that are easier to read & reason about therefore easier to scale
// React is declarative

// FUNCTIONAL CONCEPTS
// IMMUTABILITY
// data is immutable, it never changes
// we don't change the original data, instead we create a copy and alter that instead
// "Object. assign" creates a copy of an object so that you don't alter the original object
// the "spread operator (...)" can also be used to make a copy of an object
// "Array.concat" is the immutable version of "Array.push"
// Array.concat concatenates arrays
// the spread operator can also be used to concatenate arrays

// PURE FUNCTION(S)
// is a function that returns a value that’s computed based on its arguments
// they take at least one argument and always return a value or another function
// they don't cause side effects; set global variables, or change anything about application state
// they treat their arguments as immutable data

// In React, the UI is expressed with pure functions
// When writingfunctions, try to follow these three rules:
// 1. The function should take in at least one argument.
// 2. The function should return a value or another function.
// 3. The function should not change or mutate any of its arguments.

// DATA TRANSFORMATIONS
// Functional programming is all about transforming data from one form to another
// using functions transform original data into copies
// 2 core functions to master in order to be proficient with functional JavaScript:
// 1) Array.map and 2) Array.reduce.

// HIGHER-ORDER FUNCTIONS
// are functions that manipulate other functions
// they can take functions in as arguments or return functions or both
// The first category of higher-order functions are functions that expect other functions as arguments.
// Array.map, Array.filter, and Array.reduce all take functions as arguments. They are higher-order functions
// Currying is a functional technique that involves the use of higher-order functions

// RECURSION
// creating functions that recall themselves
// it's a good technique for searching data structures
// can be used to iterate through subfolders until a folder that contains files you're searching for is identified
// can be used to iterate through the HTML DOM until you find an element that does not contain any children/ contains an elememnt you're looking for

// in functional programming, we should use functions over values wherever possible