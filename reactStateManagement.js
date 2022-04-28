// REACT STATE MANAGEMENT
// We incorporate state into a function component using a React feature called "Hooks"
// Hooks contain "reusable code logic" that is "separate from the component tree"
// Hooks give componenets "functionality"
// hooks allow you to" change the state" of a component
// React ships with several built-in hooks you can use out of the box
// Hooks can cause the component they’re hooked into to rerender.
// When data within a hook changes, they have the power to rerender the component they’re hooked into with new data.

// All React elements have style properties.
// Many components also have style properties
// store state at the root of the component tree and pass it down to child components via props
// let the App component be the only component within your application that holds state
// and let child components handle the rendering
// add state to the App component using useState hook

// A "pure component" is a function component that "does not contain state" and will render the same user interface given the same props
// the goal is to store state in a single location and not have it distributed through many different components within the tree

// BUILDING FORMS IN REACT USING refs
// involves accessing the DOM node directly using a React feature called refs
// a ref is an object that stores values for the lifetime of a component
// to create a ref use the React hook "useRef"

// e.preventDefault() prevents the browser from trying to submit the form with a POST request

// CONTROLLED COMPONENTS
// values are managed by React and not the DOM
// it does not require the use of refs
// It’s called a" controlled component" because React controls the state of the component
// controlled form components are rerendered a lot
// This is OK since React is designed to handle this type of workload

// CREATING CUSTOM HOOKS
// instead of copy & pasting properties into every element, create a custom hook to deter away from redundancy code

// REACT CONTEXT
// for complex code with many components, storing all the state in the root app section is unrealistic and prone to bugs due to overuse of props
// You can place data in React context by creating a "context provider".
//  A "context provider" is a React component you can wrap around your entire component tree or specific sections of your component tree
// **context provider is the departing airport where your data boards the plan**
// The "context consumer" is the React component that retrieves the data from context
// **context consumer is the destination airport where your data lands, deplanes, and goes to work
// Using context still allows to us store state data in a single location
// but it doesn’t require us to pass that data through a bunch of components that don’t need it
// use the React function/ constructor "createContext" to create a new context object
// "createContext.provider" adds state to the data

// *** React components only need to concern themselves with rendering other React components and keeping the user interface up to date.
// *** React Hooks can concern themselves with the logic required to make the app work
// Both the UI and Hooks can be developed separately, tested separately, and even deployed separately
// 