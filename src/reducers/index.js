// Refactor to set initial state from the Reducer rather than from the store
// import the initial state, contacts, from static-data

import { contacts } from "../static-data";

export default (state = { contacts }, action) => {
    return state;
};