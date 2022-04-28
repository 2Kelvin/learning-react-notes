// PAGE SETUP
// In order to work with React in the browser, we need to include two libraries:
// 1) React -> library for creating views
// 2) ReactDOM -> library used to render the UI in the browser
// Both libraries are available as scripts from the unpkg CDN
// link the 2 libraries (above) at thebottom of HTML body using the script "src" tags; react then reactDOM
// beneath them link your pure React JavaScript code using a script "src" tag
// your pure JavaScript must be loaded after React (libraries) has been loaded

// REACT ELEMENTS
// In an SPA (Single Page Application), the browser initially loads one HTML document.
// As users navigate through the site, they actually stay on the same page.
// JavaScript destroys and creates a new user interface as the user interacts with the application.
// It may feel as though you’re jumping from page to page, but you’re actually still on the same HTML page and JavaScript is doing the heavy lifting
// The DOM API is a collection of objects that JavaScript can use to interact with the browser to modify the DOM
// React is a library that’s designed to update the browser DOM for us
// With React, we do not interact with the DOM API directly
// Instead, we provide instructions for what we want React to build
// and React will take care of rendering and reconciling the elements we’ve instructed it to create
// As the browser DOM is made up of DOM elements, React DOM is made up of React elements
// DOM and React elements may look the same, but they’re actually different
// A React element is a description of what the actual DOM element should look like
// *** ie) React elements are instructions for how the browser DOM should be created ***
// Example: creating a React element to represent a h1 element (remember to load the 2 React libraries in the body)
React.createElement("h1", { id: "tripTitle" }, "A trip to Mombasa");
// react's createElement method takes 3 arguments:
// 1) first argument: defines the type of elelment we want to create; in this case, a h1 element
// 2) second argument: gives the element created a property: in this case, we give it an id property of "tripTitle"
// 3) third argument: represents the element's children & any nodes/content between the element's opening & closing tag. In our case it's a text "A trip to Mombasa"
// During rendering, React will convert this element to an actual DOM element with the attributes & children/text->
<h1 id="tripTitle">A trip to Mombasa</h1>
// *** A React element is just a JavaScript literal that tells React how to construct the DOM element ***

// ReactDOM
// contains the tools necessary to render React elements in the browser
// it contains the render method
// React elements, with its children are rendered to the DOM by "ReactDOM.render()"
// ReactDOM.render() takes 2 arguments
// the element to be rendered is passed as the 1st argument
// the 2nd argument is the target node, where we should render the element
const town = React.createElement("h1", null, "Mombasa");
ReactDOM.render(town, document.getElementById("root"));
// note, we nest the h1 in an element in the HTML with the id "root"
// you can render more than one element using ReactDOM.render() by placing them in an array
const town2 = React.createElement("h1", null, "Voi");
const town3 = React.createElement("h2", null, "Lamu");
ReactDOM.render([town2, town3], document.getElementById("root"));
// town2 & town3 will be rendered as siblings in the parent element with the id "root"

// CHILDREN
// React renders child elements using props.children. Example)
React.createElement("h1", { id: "tripTitle" }, "A trip to Mombasa");
// here, "A trip to Mombasa" is rendered through props.children; as a child of the h1 element
// other React elements can be rendered as children too forming an "element tree"/ tree of elements.
// Example) what the browser should render in the DOM
<ul>
    <li>2 lb salmon</li>
    <li>5 sprigs fresh rosemary</li>
    <li>2 tablespoons olive oil</li>
    <li>2 small lemons</li>
    <li>1 teaspoon kosher salt</li>
    <li>4 cloves of chopped garlic</li>
</ul>
// how to in React
React.createElement(
    "ul",
    null,
    React.createElement("li", null, "2 lb salmon"),
    React.createElement("li", null, "5 sprigs fresh rosemary"),
    React.createElement("li", null, "2 tablespoons olive oil"),
    React.createElement("li", null, "2 small lemons"),
    React.createElement("li", null, "1 teaspoon kosher salt"),
    React.createElement("li", null, "4 cloves of chopped garlic")
);
    // here we create 6 child elements in the "ul" element

// creating an entire recipe rooted in a section element(parent element) using React
// "section" element children; h1, ul & section
// "ul" element's children: 6 "li"
// "section" element's children: 1 "h2" & 6 "p"
// **** we use "className" to give an element a "class" attribute in React *****
// this is because "class" is a reserved keyword in JavaScript
// *** a React app is a tree of React elements all stemming from a single root element ***
// React elements are the instructions React will use to build a UI in the browser (through the DOM)
React.createElement(
    "section",
    { id: "baked-salmon" },
    React.createElement("h1", null, "Baked Salmon"),
    React.createElement(
    "ul",
    { className: "ingredients" },
        React.createElement("li", null, "2 lb salmon"),
        React.createElement("li", null, "5 sprigs fresh rosemary"),
        React.createElement("li", null, "2 tablespoons olive oil"),
        React.createElement("li", null, "2 small lemons"),
        React.createElement("li", null, "1 teaspoon kosher salt"),
        React.createElement("li", null, "4 cloves of chopped garlic")
    ),
    React.createElement(
    "section",
    { className: "instructions" },
        React.createElement("h2", null, "Cooking Instructions"),
        React.createElement("p", null, "Preheat the oven to 375 degrees."),
        React.createElement("p", null, "Lightly coat aluminum foil with oil."),
        React.createElement("p", null, "Place salmon on foil."),
        React.createElement(
        "p",
        null,
        "Cover with rosemary, sliced lemons, chopped garlic."
        ),
        React.createElement(
        "p",
        null,
        "Bake for 15-20 minutes until cooked through."
        ),
        React.createElement("p", null, "Remove from oven.")
    )
);

// CONSTRUCTING ELEMENTS WITH DATA
// The major advantage of using React is its ability to separate data from UI elements
// Since React is just JavaScript, we can add JavaScript logic to help us build the React component tree
// Example) ingredients can be stored in an array, and we can map that array to the React elements
React.createElement(
    "ul",
    null,
    React.createElement("li", null, "2 lb salmon"),
    React.createElement("li", null, "5 sprigs fresh rosemary"),
    React.createElement("li", null, "2 tablespoons olive oil"),
    React.createElement("li", null, "2 small lemons"),
    React.createElement("li", null, "1 teaspoon kosher salt"),
    React.createElement("li", null, "4 cloves of chopped garlic")
);
// example above can be efficiently redone by using a JavaScript array
const items = [
    "2 lb salmon",
    "5 sprigs fresh rosemary",
    "2 tablespoons olive oil",
    "2 small lemons",
    "1 teaspoon kosher salt",
    "4 cloves of chopped garlic"
];
// we map over the array and create list items for all the ingredients available in the array like this:
// This syntax creates a React element ("li") for each ingredient in the array
React.createElement(
    "ul",
    { className: "ingredients" },
    items.map((ingredient, i) =>
    React.createElement("li", { key: i }, ingredient)
    )
);

// REACT COMPONENTS
// Components allow us to reuse the same structure, we can then populate those structures with different data
// a component is created by writing a function
// That function will return a reusable part of a user interface
// examples of parts of a user interface: heading, buttons, lists ...
// example of a function component that creates an ingredients list
// items -> is the items array initialized above
function IngredientsList({ items }) {
    return React.createElement(
        "ul",
        { className: "ingredients" },
        items.map((ingredient, i) =>
        React.createElement("li", { key: i }, ingredient)
        )
    );
}
// components render trees of elements and other components

// CREATING A REACT APP
// a command-line tool that autogenerates a React project
// it lets developers get started with React projects quickly without the manual configuration of webpack, Babel, ESLint, and associated tools
// To get started with Create React App, install the package globally: "npm install -g create-react-app"
// Then, use the command and the name of the folder where you’d like the app to be created
// eg) "create-react-app my-project"

// Method 2: USING npx
// use npx to run Create React App without the need for a global install
// Simply run "npx create - react - app my - project"
// This will create a React project in that directory "my Project" with just 3 dependencies: React, ReactDOM & react-scripts
// "react-scripts" installs Babel, ESLint, webpack, and more tools so that you don’t have to configure them manually
// Within the generated project folder you’ll also find a 'src' folder containing an "App.js" file
// "App.js" file; Here, you can edit the root component and import other component files
// From within the "my-react-project" folder, you can run 'npm start'
// or run 'yarn start' if you prefer
// This will start your application on port 3000
// run tests with 'npm test' or 'yarn test'
// This runs all of the test files in the project in an interactive mode
// You can also run the 'npm run build' command. If you're using yarn, run 'yarn build'
// This will create a production-ready bundle that has been transformed and minified

// Method 3: Use CodeSandbox
// it's an IDE that runs online