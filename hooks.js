// hook is the logic that gives a component/UI behaviour or state

// ** component -> UI
// ** hook -> logic code for giving component behavior/state

// Rendering is the heartbeat of a React application
// When something/ state changes, the component tree rerenders, reflecting the latest data as a user interface
// "useState" is an example of a hook that describes how component rendering should happen
// There are more Hooks that define rules about why and when rendering should happen and more that enahance rendering performance

// Examples of other hooks
// 1) "useEffect" >>>is a function that happens after a render
// A component is simply a function that renders a user interface
// Renders occur when the app first loads and when props and state values change
// The things we want the component to do other than return the UI are called "effects"
// example of side-effects: console.logging, interaction with a browser or a native API...
// "useEffect" hook/function is used for these side-effects
// useEffect waits for the render and then goes on to do its thing as programmed
// it can also be used to access the current state values within a component and use those values to do something else

// THE DEPENDENCY ARRAY -> used to control when an "effect" is invoked
// "useEffect" is designed to work in conjunction with other stateful Hooks like "useState" and "useReducer"
// The dependency array controls when the callback function should be invoked

// Deep Checking Dependencies
// it's easy to compare if a two strings are equal
// however, comparing "objects, arrays & functions" is different
// this is because, even though they look the same & have the same entries, they are 2 different instances
// to solve this you can assign them a variable then compare
// In JavaScript, arrays, objects, and functions are the same only when they’re the exact same instance
// "useMemo" invokes a function to calculate a memoized value
// memoization is a technique that’s used to improve performance
// In a memoized function, the result of a function call is saved and cached
//  when the function is called again with the same inputs, the cached value is returned
// useMemo allows us to compare the cached value against itself to see if it has actually changed
// "useCallback" can be used like "useMemo", but it memoizes functions instead of values

// useLayoutEffect
// useLayoutEffect is called at a specific moment in the render cycle
// it happens before "useEffect"
// useLayoutEffect is invoked after the render but before the browser paints the change
// In most circumstances, useEffect is the right tool for the job
//  but if your effect is essential to the browser paint (the appearance or placement of the UI elements on the screen), use "useLayoutEffect"
// examples of when to use "useLayoutEffect": when tracking the position of the mouse, obtaininig the width & height of an element when the window is resized...

// Rules to Follow with Hooks
// Hooks only run in the scope of a component
// break functionality out into multiple Hooks
// Hooks should only be called at the top level

// Improving Code with useReducer
// A reducer function takes in the current state and returns a new state
//  eg)  If checked is false, it should return the opposite, true

// useReducer to Handle Complex State
// helps handle state updates more predictably as state becomes more complex
// A common error when managing state is to overwrite the state
// This can be fixed by using "useReducer" & inside it spreading the current values, then overwriting the value you want to change

// Improving Component Performance
// i.e. preventing unnecessary renders and reducing the time a render takes to propagate
// These React tools prevent unnecessary renders {"memo", "useMemo" & "useCallback"}
// "memo" function is used to create pure components
// a pure component is a component that always renders the same output given the same properties
// The "memo" function can be used to create a component that will only render when its properties change
// Start by importing it from the React library and use it to wrap the pure component
// A predicate is a function that only returns true or false

// shouldComponentUpdate and PureComponent
// PureComponent is the same as React.memo, but PureComponent is only for class components; React.memo is only for function components

// The React Profiler can be used to measure the performance of each of your components. The profiler ships with the React Developer Tools that you’ve likely installed already(available for Chrome and Firefox)