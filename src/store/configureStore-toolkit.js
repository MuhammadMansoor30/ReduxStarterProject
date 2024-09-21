import { configureStore } from '@reduxjs/toolkit';  // Using the redux toolkit package.
// import reducer from './reducer';  // For updating state using reducer
import taskReducer from './task-toolkit';  // For updating state using slice
import employeeReducer from './employee';  // For Practicing employee actiona using redux-toolkit.

// const store = configureStore({reducer});  // Configuring store using redux toolkit package. Single Reducer

const store = configureStore({
    reducer: {
        tasks: taskReducer,
        employee: employeeReducer,
    }
});  // Configuring store using redux-toolkit for multiple reducers.

export default store;

// NOTES:  (Modern Approach to redux State management and devtools using redux-toolkit)
// (SEC 5)
// Redux toolkit it used for creating store reducers and actions in a more efficient way as compared to traditional method.
// For this we have to install it using npm '@reduxjs/toolkit'.
// Also redux toolkit has builtin supoort for redux dev-tools so we dont need to install that extension.
// If it is installed we first have to delete it or install redux-toolkit forcefully.