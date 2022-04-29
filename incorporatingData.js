// UI components are vessels for data
// data gives components value

// REQUESTING DATA
// HTTP request is the most popular way of transmitting data to and from the internet
// In JavaScript, the most popular way to make an HTTP request is to use fetch

// SENDING DATE WITH A REQUEST
// we use a "POST request" when we’re creating data
// and a a "PUT request" when we’re modifying data

// UPLOADING FILES WITH FETCH
// Uploading files requires a different type of HTTP request called "multipart-formdata request"
// this request tells the server that a file or multiple files are located in the body of the request
// to make this request, pass a "FormData" object in the body of the request

// AUTHORIZED REQUESTS
// when  obtaining personal or sensitive data, authorization is typically required
// Fetching data from within a React component requires the use of "useState" and "useEffect" hooks
// "useState" hook for storing the response in state &
// "useEffect" hook for making the fetch request

// SAVING DATA LOCALLY
// We can save data locally to the browser using the "Web Storage API"
// use "window.localStorage" or "window.sessionStorage" objects to save the data
// these objects increase the performance of our applications since we send fewer network requests due to data already saved locally; therfore no need to fetch it again
// "window.sessionStorage" API saves data for the user’s session
// therefore closing or restarting the browser clears all data saved to "sessionStorage"
// "window.localStorage" though save data indefinitely until you remove it yourself
// to clear localStorage, just use "localStorage.clear()"
// JSON data should be saved in the browser storage as a string

// HANDLING PROMISE STATES
// HTTP requests and promises both have three states: pending, success (fulfilled) and fail (rejected)

// RENDER PROPS
// these are properties that are rendered
// eg 1) components sent as properties to be rendered when specific conditions are met OR
// eg 2) function properties that return components that will be rendered
// Render props maximizes reusability of asynchronous components

// VIRTUALIZED LISTS ( building virtualized list components)
// 'windowing' / "virtualization" allows us to scroll very large or infinite lists of data without crashing our browser
// some examples of  already developed virtualized list components are "react-window" & "react-virtualized"
// react-window is a library that has several components we can use to render virtualized lists eg) "fixSizeList" component

// CREATING A FETCH HOOK
// you can reuse the logic necessary for making a fetch request by creating a custom hook
// then use this custom fetch hook in components across an application whenever you need to make a fetch request

// CREATING A FETCH COMPONENT
// create a custom fetch component with a loading spinner or error 'display element' to reuse across your application

// HANDLING MULTIPLE REQUESTS
// More often than not, we need to make several HTTP requests to obtain all the data required to hydrate our application.

// WATERFALL REQUESTS
// are HTTP requests that happen one after the other
// ie) they're dependent on each other
// if the first request fails, the second request fails too
// here, the components fetching the requests are nested in each other
// All HTTP requests are visible from the "Network tab" under "Developer Tools"

// PARALLEL REQUESTS
// it’s possible to make an application faster by sending all requests at once
// here, the components fetching the requests are placed side by side of each other
// ie) they're all on the same level to one another
// & we’re attempting to get all the data we need immediately at the same time
// "Parallel and Waterfall Requests" can work together/ with each other
// sometimes it’s hard to make every request right when your app initially renders
// therefore in such cases, it's okay to use "Waterfall Requests" with the "Parallel Requests"
// it's always a good idea to test your app under slow network conditions to reveal & eliminate bugs

// GRAPHQL
// GraphQL is a declarative solution for communicating with APIs
// GraphQL was designed to make parallel data requests/ get all the data we need immediately and at the same time
// In order to get data from a GraphQL API, we still need to make an HTTP request to a specific URI
// we also need to send a query along with the request
// a "GraphQL query" is a declarative description of the data we’re requesting
// The service will parse this description and then package all the data we’re asking for into a single response
// In order to use GraphQL in your React application, the backend service you’re communicating with needs to be built following GraphQL specifications
// Most "GraphQL services" provide a way to explore the GraphQL API

// MAKING A GRAPHQL REQUEST
// A GraphQL request is an HTTP request that contains a query in the body of the request
// You can use fetch to make a GraphQL request
// other libraries and frameworks can also be used to make GraphQL requests eg) "graphql-request" library
// GraphQL is not restricted to HTTP
// It can technically work with any network protocol