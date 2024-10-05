import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import store from './store/configureStore-toolkit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
     <App />
  </Provider>
 
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);


// NOTES (SEC 8):
// React.Strict Mode is used for testing purposes and in phas eof react app development.
// In Development the React.StrictMode renders components twice so we will remove it so that we can render them once.
// By using the react-redux library we dont need to create context rather we will use the provider component and pass store as prop to it. It works the same as context method. Passes the store across all the application.