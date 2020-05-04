// Combine the different reducers
// To combine these reducers, need helper function combineReducers from redux
// Import combineReducers from redux
// Import all the reducers from their respective directories
// Invoke combineReducers function on an object with all the reducers  
// ** combineReducers function takes in an object, an object exactly like the state of application and makes sure the values are gotten from invoking the passed functions. 

import user from './user';
import messages from './messages';
import typing from './typing';
import contacts from './contacts';
import activeUserId from './activeUserId';
import { combineReducers } from 'redux';

export default combineReducers({
    user,
    messages,
    typing,
    contacts,
    activeUserId
});
