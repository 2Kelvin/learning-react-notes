// JSX combines the JS from JavaScript and the X from XML
// It's a JavaScript extension that allows us to define React elements using a tag-based syntax directly within our JavaScript code
// look similar to HTML, but they're different
// JSX is more efficient in coding to always using the "createElement()"

// USING JSX
// JSX makes React more readable like HTML & XML
// JSX syntax: {looks like HTML}
    // an element’s type is specified with a tag eg) <ul></ul>
    // The tag’s attributes represent the properties eg) <ul class="ingredients"></ul> class-> attribute/ property
    // The element’s children are added between the opening and closing tags eg) <li></li> tags inside the <ul></ul>
// JSX works with components too. To do this, simply define the component using the class name
// use curly braces when passing JavaScript values to components as properties
// component properties take 2 types: strings or JavaScript expressions [includes: arrays, objects, functions]
// in order to use JS expressions as properties in components, you must surround them using curly braces

// JSX TIPS
// JSX syntax looks like HTML
// but it's different from HTML in the foloowing ways:
    // Nested components
    // JSX allows you to add components as children of other components

    // className
    // "class" is a reserved word in JavaScript
    // therfore, we use "className" to define the class attribute instead

    // JavaScript expressions
    // JavaScript expressions are wrapped in curly braces  
    // they indicate where variables will be evaluated and their resulting values returned
    
    // Evaluation
    // JavaScript added in between the curly braces will get evaluated
    // ie) operations such as concatenation or addition will occur
    // also, functions found in JavaScript expressions will be invoked
    
// MAPPING ARRAYS WITH JSX
// JSX is JavaScript, so you can incorporate JSX directly inside of JavaScript functions
// you can map an array to JSX elements

// JSX looks clean and readable, but it can’t be interpreted by a browser
// all JSX must be converted into createElement calls
// the tool used for this conversion is "babel"
// not all browsers support the latest JavaScript syntax
// and no browser supports JSX
// to use the latest JS along with JSX, you need to "compile" your code
// compiling -> converting your code into something the browser can interpret
// babel compiles your latest JS & JSX syntax into code the browser can interpret
// ***easiest way to use babel: include a link to the Babel CDN directly in your HTML ***
// it will compile any code in script blocks that have a type of “text/babel”
// link it below the 2 "React libraries"

// JSX pro: easily readable by developers
// JSX con: not readable by the browser; must be converted into JS first

// REACT FRAGMENTS
// React will not render two or more adjacent or sibling elements as a component
// in the old days, to hack this we used to wrap these in an enclosing tag like a div
// this resulted in creating many unneccessary elements/ tags
// use "React fragments" to mimic the behavior of a wrapper without actually creating a new tag
// wrap the two adjacent/sibling elements inside the "<React.Fragment> </React.Fragment>" tags
// or use the React.Fragment shorthand; "<> </>"