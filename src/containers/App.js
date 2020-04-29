// The App component renders the Main and Sidebar components. 

// For Sidebar to have access to the required contacts data, we'll pass in the data via props. 
// In App.js, retrieve contacts from the store and then pass it on to Sidebar. 
// Install lodash and use _.values to convert the contacts object to an array when passed as props. 

import React from 'react';
import './App.css';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import store from '../store';
import _ from 'lodash';

function App() {
  const { contacts } = store.getState();
  return (
    <div className="App">
      <Sidebar contacts = {_.values(contacts)}/>
      <Main/>
    </div>
  );
}

export default App;
