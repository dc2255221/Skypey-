// Refactor to set initial state from the Reducer rather than from the store
// Import the initial state, contacts, from static-data
// This will be the contacts reducer

import { contacts } from "../static-data";

export default (state = contacts, action) => {
    return state;
};