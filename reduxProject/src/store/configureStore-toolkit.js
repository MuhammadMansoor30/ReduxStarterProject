import { configureStore } from '@reduxjs/toolkit';  // Using the redux toolkit package.
// import reducer from './reducer';  // For updating state using reducer
import taskReducer from './task-toolkit';  // For updating state using slice
import employeeReducer from './employee';  // For Practicing employee actiona using redux-toolkit.
import {log, error} from './middleware/log';

// const store = configureStore({reducer});  // Configuring store using redux toolkit package. Single Reducer

const store = configureStore({
    reducer: {
        tasks: taskReducer,
        employee: employeeReducer,
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), log, error]
});  // Configuring store using redux-toolkit for multiple reducers.

export default store;

// NOTES:  (Modern Approach to redux State management and devtools using redux-toolkit)
// (SEC 5)
// Redux toolkit it used for creating store reducers and actions in a more efficient way as compared to traditional method.
// For this we have to install it using npm '@reduxjs/toolkit'.
// Also redux toolkit has builtin supoort for redux dev-tools so we dont need to install that extension.
// If it is installed we first have to delete it or install redux-toolkit forcefully.
// (SEC 6)
// We can also add middleware to the configure store object to execute the middleware in our code.
// By default there are some built in middlewares which can be used.
// We can also create our own middlewares.
// The middlewrae syntax takes a callback function which then contains all the middlewares we want to execute along with the default middleware.
// We can use the given syntax or use the following:
// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(log)
// We can also use "redux-logger" library to log the changes to the middleware after installing the library.
// Import in the store file and then add it in the middleware portion to see the logs.