This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


## Overview of Redux
// 1. Create 3 folders for each major actor of redux app (reducers, actions, store)
    // Within each folder, create an index.js (entry point)
// 2. Create Redux Store
    // Import createStore factory function from Redux
    // Import the reducer function
    // Invoke createStore() on reducer function and initial state to create the store. Export it.
// 3. Create Redux Reducer
    // Function that takes in the state of the app and an action
    // Initially, always return the new state of application
// 4. Create Dispatch Action Function
    // Function that takes in an event and uses e.target.dataset.___ to access data attribute
    // Invoke store.dispatch on action object (which can be created using action creator function) 
    // In Redux, every action flows through the reducer... 
// 5. Refactor Redux Reducer to handle different action types
    // Use switch statement to check the type of action
    // Update state differently depending on specific type of action
    // Don't mutate state received in Reducer. Instead, return a new copy of state. Use spread operator. 
    // By default, return state of app
// 6. Subscribe to Store Updates
    // Wrap the rendering of the App within a function 
    // Invoke store.subscribe() on render function object to re-render the app with the new state values whenever there is an update to the store. 

## Overall Layout
// Simple 2-column layout. A fixed width sidebar on the left and a main section on the right that takes remaining viewport width. 

## Design of App's State Object
// A user of the app has multiple contacts. Each contact in turn has a number of messages making up their conversation with the main app user. Upon clicking a user contact from the Sidebar, their messages will be shown. The user's messages will stay on right and the contact, on the left. One is blue, the other is dark.

// Pick out the front runners within the state object, and place them in "front". By "front runners", I mean the fields of the state object most CRUD operations will be performed on

// We will be reading "Messages" field quite often -- for each user's contact and will also need to edit/ delete a user's message. The same goes for "Contacts".

// Instead of having "Messages" and "Contacts" fields nested, make them primary keys within state object

// "Normalize the State Object"
    // Use an object to represent User field
        // Each user object will have a name, email, profile pic, text status, unique user ID property
    // Use an object to represent Messages field
        // For the "Messages" field, the unique user IDs of the contacts will be used as keys 
        // Each user ID with be mapped to an object with a number of messages within a conversation. 
        // Each message will be represented by a number (0, 1, ...) and mapped to its respective contact message object
        // Each contact message object will be represented as an object with text and is_user_msg (a Boolean to differentiate if a message if from a contact or the default app user) 
    // Use an object to represent contacts field
        // The unique IDs of the contacts will be used as keys to their respective user objects
    // Caveats to using objects over arrays
        // 1) Its alot easier to iterate over arrays which is useful when needing to render a list of components. We can't use map on objects
            // Solution 1a. Use lodash to iterate over objects
            // Solution 1b. Convert object to an array using _.values(). Then, map over the values
        // 2) Arrays preserve the order of their values
            // This is important for a chat application! We are representing user conversations as an object so we do care about the order in which the messages are displayed.
            // Solution: Keep a separate array of IDs to denote order of values 
                // If we need to add values to the object, we can do this by just pushing the associated ID to the numbersOrderIDs as well. 
            // For simplicity, the IDs of the messages will always be in order -- as they are numbered in increasing values from zero upwards.   


## Building the List of Users
// Map over contacts data from the state, and for each contact, render a User component
// Where does data come from? In real world scenario, we will fetch data from server with Ajax call. However, for now, we will use static data to build app

## Setting up the Store

## Building the User Component

## Container and Component Folder Structure
// Every component that talks directly to Redux whether that is to retrieve state from the store or to dispatch an action should be moved to a containers directory.
// Other components, those that do not talk to Redux, should be moved over to a components directory. 

## Reducer Composition
// Have multiple reducers in application as opposed to one reducer to handle all of the operations of the state. These reducers are then combined into one. This will increase scalability.
// Instead of having the entire object managed by one reducer, have one reducer manage the state update for a single field in the state object. The return value from each reducer will be solely for the field they represent.
// User field managed by user Reducer. Messages field by messages Reducer. Typing field by typing Reducer. Contacts field by contacts Reducer. ActiveUserId field by activeUserId Reducer.   
