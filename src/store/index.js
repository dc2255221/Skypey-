// Import createStore factory function from redux
// Import initial state, contacts, from static-data
// Import reducer function
// Set up store by invoking createStore() on reducer and initial state
// Refactor to set initial state from the Reducer. Remove initial state in createStore method
// ** Approach of setting an initial state in createStore is usually used for server side rendering. 

import { createStore } from "redux";
import reducer from "../reducers"; 

const store = createStore(reducer);

export default store;