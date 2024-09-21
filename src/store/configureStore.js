import { legacy_createStore as createStore} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';  // By installing redux-devtools-extension
import reducer from './reducer';

// const store = createStore(reducer);   // Configuring store without redux dev-tools

// const store = createStore(
//     reducer, 
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );   // Configuring store with redux-dev tools.

const store = createStore(
    reducer, 
    devToolsEnhancer({trace: true}), // Setting trace to true to trace the changes in state back to code
);   // Configuring store with redux-dev-tool extension .

export default store;

// NOTES:
// (SEC 3)
// For creating store we will install 'redux' libraray using npm.
// We will use the create store function/method to create the store.
// The create store method takes the root reducer as its argument.
// Root Reducer is a reducer whihc conatins all the different reducers of the application.
// In this case since there is only one reducer so we will import and use it as an argument.
// Export store function to use it in the app.js file or main entrypoint file of your application.

// (SEC 4)
// For configuring redux Dev-tools we have to add redux dev tools extension to browser and visit its documentation to enable it.
// Redux Dev-tools is a very great tool for debugging of out redux application.
// We can also install a library to enable redux devtools tracing code ability to solve errors and check state changes.
// For enbaling it we have to add a new item to webpack.config file and re run the project for changes to be made.
// In the extension of browser we can also specify path of our VSCODE by adding project directory path to it. Then it will open VSCODE for tracing of state. We have to change the path everytime for other or new application.
// We can aslo export and import redux state code in json format using the redux-dev-tools browser extension.