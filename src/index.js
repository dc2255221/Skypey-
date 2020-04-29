// The entry point of the app. Index.js renders the App component. 

// Refactor ReactDOM.render call to sit inside render function. Invoke render function to have App rendered correctly. 
// Import store and make sure any time the store is updated, the render function is invoked. 

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import store from './store';

const render = () => {
  fancyLog();
  return ReactDOM.render(<App/>, document.getElementById('root'));
}
render();
store.subscribe(render);

function fancyLog() {
  console.log("%c Rendered with...", "background: purple; color: #FFF");
  console.log(store.getState());
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
