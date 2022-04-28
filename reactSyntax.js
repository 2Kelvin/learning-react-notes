// CONST
// in ES5 all Javascript variables were declared using the keyword "var"
// in ES6 "const" was introduced

// DIFFERENCE BETWEEN VAR AND CONST
// var can be overwritten 
// i.e its value can be changed once declared eg)
var car = "bmw";
car = "porsche";
console.log(car);
// the console will display car as "porsche"

// const cannot be overwritten
// once const is declared you cannot change its value

 const hokage = "Naruto";
 hokage = "Pain";
// this will result in an error since const cannnot be overwritten


// LEXICAL SCOPE & LET
// lexical scope is the scope in functions >> ie) code block between the function's curly braces
// function's lexical scope blocks off any variables declared inside them 
// for loops & if/else statements' curly braces however do not block off the variables declared inside them using var
// if a variable is created inside an if/else block that variable is not scoped to the code block/> it's global eg)
var topic = "Javascript";
if (topic) {
    var topic = "React";
    console.log("block", topic);
    // this console logs "React"
}
// this too console logs "React" since you have overwritten var topic in the if statement
console.log("global", topic);
// the only way to block them off is by using the keyword "let"


// LET
// "let" scopes a variable to any code block
// it helps protect the global variable >> not to be overwritten
// eg) "let" here scopes topic2 only inside the if/else statement
var topic2 = "JavaScript";
if (topic2) {
    let topic2 = "React";
    console.log("block", topic2); //this displays "React"
}
console.log("global", topic2); //this displays "JavaScript"
// the value of var topic2 is not overwritten || using let protects the value of the global variable
// use "let" in "for loops" to scope variables & protect global variables from being overwritten


// TEMPLATE STRINGS
// a better alternative to "string concatenation"
// allow us to insert variables into a string
// use `` to sorround the string
// it's basically one string with variables sorrounded with  ${}  eg)
 console.log(`Congratulations ${customerName}, you have won ${gift}. Come pick it up at ${location} at ${time}.`);
// template strings honor whitespace >> they will be visible in your final code
// also using template strings, you can span your code into multiple lines without any errors in your code


// CREATING FUNCTIONS
// DEFAULT PARAMETERS
// these are default values for function arguments
// in the event that a value is not provided for the function arguments/parameters, the default value(s) will be used eg)
// in the example below "John Doe" and "dancing" are the default values
// default values can be strings, numbers, objects....
function studentProfile(studName = "John Doe", studHobby = "dancing") {
    console.log(`${studName} loves ${studHobby}`);
}
studentProfile();


// ARROW FUNCTIONS
// with arrow functions you can create functions without using the function keyword
// you also don't have to use the return keyword
// normal function
const lordify = function (firstname) {
    return `${firstname} of Chesterfield`;
};
// arrow function of the above function 
const lordify = firstname => `${firstname} of Chesterfield`;
console.log(lordify("John"));
// we remove the return keyword because the arrow points to what should be returned
// if the function takes one argument like "firstname" above, we remove the parentheses around the argument in the arrow function
// if arguments are more than one, they should be sorrounded by parentheses eg)
const lordify2 = (firstname, land) => `${firstname} of ${land}`;
console.log(lordify2("Kelvin", "Thikaland"));
// if there are multiple lines (of function's code block) to be returned, use curly braces eg)
const lordify3 = (firstname, land) => {
    if (!firstname) {
        throw new Error("A firstname is required to lordify");
    }
    if (!land) {
        throw new Error("A lord must have land");
    }
    return `${firstname} of ${land}`;
};
console.log(lordify3("Nairobiland"));
console.log(lordify3("Jessica"));
console.log(lordify3("Jessica", "Nairobiland"));


// RETURNING OBJECTS
// to return an object from a function, just wrap the object you're returning with parentheses (right before the curly brackets) eg)
// function person below creates a person object based on the name parameters passed
const person = (firstName, lastName) => ({
    first: firstName,
    last: lastName
});
console.log(person("Sue", "Pendo"));


// OBJECTS & ARRAYS
// DESTRUCTING OBJECTS
// allows you to locally scope fields within objects & declare which values wil be used. eg)
const sandwich = {
    bread: "festive",
    meat: "chicken",
    cheese: "swiss",
    toppings: ["lettuce", "tomato", "mustard"]
};
// scoping the "bread" & "meat" from the "sandwich object" to be used locally
// here we're pulling "bread" & "meat" out of the sandwich object and creating local variables for them
// by declaring them using const they cannot be changed
const { bread, meat } = sandwich;
console.log(bread, meat);
// deconstructing using let inorder to change the variables' values without affecting the original sandwich property values
let { bread, meat } = sandwich;
bread = "broadways";
meat = "beef";
console.log(bread);
console.log(meat);
// the sandwich values here are unchanged
console.log(sandwich.bread, sandwich.meat);

// deconstructing function arguments using arrow functions
// regular method
const lordify = regularPerson => {
    console.log(`${regularPerson.firstName} of Canterbury`);
};
const regularPerson = {
    firstName: "Mary",
    lastName: "Doe"
};
lordify(regularPerson);
// arrow function way -- instead of using dot notation
// the curly braces symbolise "nested" --- like the firstName parameter used below
const lordify = ({ firstName }) => {
    console.log(`${firstName} of Canterbury`);
};
const regularPerson = {
    firstName: "Mary",
    lastName: "Doe"
};
// using the nested spouse name to lordify
const regularPerson = {
    firstName: "Mary",
    lastName: "Doe",
    spouse: {
        firstName: "John",
        lastName:"Doe"
    }
};

const lordify = ({ spouse: firstName }) => {
    console.log(`${firstName} of Canterbury`);
};


// DESTRUCTING ARRAYS
// assigning the 1st value of an array to a variable name
const [firstCereal] = ["Maize", "Beans", "Ndengu"];
console.log(firstCereal);
// assigning 2nd,3rd... values in an array a variable name using the "list matching" method
// List matching-- commas take place of elements that should be skipped
// assigning the 2nd cereal a variable name
const [, secondCereal] = ["Maize", "Beans", "Ndengu"];
console.log(secondCereal);
// assigning the 2nd cereal a variable name
const [, , thirdCereal] = ["Maize", "Beans", "Ndengu"];
console.log(thirdCereal);
// do the same for the 4th onwards values


// OBJECT LITERAL ENHANCEMENT || RESTRUCTURING
// its the opposite of destructuring
// entails grabbing a global variable and adding it to an object || pulling global variables into objects eg)
const color = "black";
const material = "leather";
// you can also add 'global' functions to objects
const size = function () {
    console.log("Am size 42!");
};
// restructuring the timberland object
const timberland = {
    color,
    material,
    size
};
// variables "color", "material" and "size" are now properties & method of the "timberland" object
console.log(timberland);


// THE SPREAD OPERATOR (...)
// performs several tasks
// 1) combines the contents of arrays e.g)
const birds = ["Chicken", "Duck", "Goose"];
const animals = ["Cat", "Dog", "Cow"];
// the spread operator joins the birds and animals arrays' items into one to make the birdsNanimals array 
const birdsNanimals = [...birds, ...animals];
console.log(birdsNanimals.join(", "));

// 2) creates a copy instead of mutating the original data e.g)
const heroes = ["Murdock", "Rogers", "Parker"];
    // grabbing the last hero in the array without altering the heroes array
    // the spread operator creates a copy of the heroes array
    // using the array destructuring method
const [lastHero] = [...heroes].reverse();
console.log(lastHero);

// 3) gets the remaining items in an array
const towns = ["Nakuru", "Lamu", "Mombasa", "Voi", "Kericho"];
const [first, ...otherTowns] = towns;
console.log(otherTowns.join(","));

// 4) collects function arguments as arrays
const townsToTravel = ["Nakuru", "Lamu", "Mombasa", "Voi", "Kericho"];

function travel(...args) {
    let [startTown, ...remaininTowns] = args;
    let [lastTown, ...stops] = remaininTowns.reverse();
}

console.log(`Drive through ${args.length} towns`);
console.log(`Start at ${startTown}`);
console.log(`The last destination is ${lastTown}`);
console.log(`Stopping ${stops.length} times in between`);

// 5) can be used with objects just like we did with arrays
// joining objects and more


// PROMISES
// a promise is an object that represents whether an async JS operation is "pending", "completed" or has "failed"
// basically it tells us the status of our data request

// fetch()
// fetches data from an API
// just insert the API's URl in fetch's () to fetch the data for you

// .then() method -- fetch.then()
// then() method takes in an event handler function if the operation was successful
// in our case, the event handler function will be called if fetch() successfully fetches the data from the API
// once the promise status is "completed/ successful" then run the callback function


// CLASSES
// normal way
function Vacation(destination, length) {
    this.destination = destination;
    this.length = length;
    }
    Vacation.prototype.print = function() {
    console.log(this.destination + " | " + this.length + " days");
};

// classes way
class Vacation {
    constructor(destination, length) {
    this.destination = destination;
    this.length = length;
    }
    print() {
    console.log(`${this.destination} will take ${this.length} days.`);
    }
}
// in both method print() is prototypically inherited
// creating a new object/instance from the constructor is the same
const coastTrip = new Vacation("Mombasa", 5);
coastTrip.print();
// classes can also be extended
// when a class is extended, the subclass inherits the properties and methods of the superclass e.g)
class Expedition extends Vacation {
    constructor(destination, length, gear) {
    super(destination, length);
    this.gear = gear;
    }
    print() {
    super.print();
    console.log(`Bring your ${this.gear.join(" and your ")}`);
    }
}
// creating an object instance of the "Expedition" class/subclass/Constructor
const mountKenyaTrip = new Expedition("Mt. Kenya", 6, [
    "sunglasses",
    "Kenyan flags",
    "camera"
    ]);
mountKenyaTrip.print();
    

// ES6 MODULES
// are pieces of reusable code that can easily be incorporated into other JavaScript files without causing variable collisions.

// export
// used to export any JavaScript type that will be consumed in another module

// export default
// used in place of export when you wish to export only one type.
// both "export" and "export default" can be used on any JavaScript type: primitives, objects, arrays, and functions

// import statement
// consumeS in other JavaScript files
// you can scope module variables locally under different variable names
// you can also import everything into a single variable using *
// This import and export syntax is not yet fully supported by all browsers or by Node


// CommonJS
// is the module pattern that’s supported by all versions of Node
// all JavaScript objects are exported using "module.exports"
// CommonJS does not support an "import statement". Instead, modules are imported with the "require function"