// The App component renders the Main and Sidebar components. 

// For Sidebar to have access to the required contacts data, we'll pass in the data via props. 
// Retrieve contacts from the store and then pass it on to Sidebar. 
// Install lodash and use _.values to convert the contacts object to an array of user objects when passed as props. 

// For Main to have the required user and activeUserId, we'll pass in the data via props.
// Retrieve user and activeUserId from the store and pass it to Main. 

import React from 'react';
import './App.css';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import store from '../store';
import _ from 'lodash';

function App() {
  const { contacts, user, activeUserId } = store.getState();
  return (
    <div className="App">
      <Sidebar contacts = {_.values(contacts)}/>
      <Main user = {user} activeUserId = {activeUserId}/>
    </div>
  );
}

export default App;
