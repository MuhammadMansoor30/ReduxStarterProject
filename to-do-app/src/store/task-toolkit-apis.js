import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../utils/http';
import {apiCallback} from './generalApi';

let id = 0;

let initialState = {
    tasks: [],
    loading: false,
    error: null,
};

// Use this function only when trying to fetch data manually without using the 'api' middleware.
// export const fetchTasks = createAsyncThunk("fetchTasks", async (a, {rejectWithValue}) => {
//     try{
//         const response = await axios.get('/tasks');    // Making requets using the baseUrl defined in the utils folder
//         return {tasks: response.data};
//     }
//     catch(error){
//         return rejectWithValue({error: error.message}); // Using it to get the value of error
//     }
// });  // Create Async Thunk takes 2 args 1st is name of Action and other is callback which is async function call to api.

const slice = createSlice({
    name: "Tasks",  // Giving slice a name 
    initialState, // Giving inital state obj as initital state.
    reducers: {
        // action: function  // This is the syntax of writing reducers inside of slice
        apiRequested: (state, action) => {
            state.loading = true;
        },
        getTasks: (state, action) => {   // Adding new action to get tasks from backend
            state.tasks = action.payload.tasks;  // Setting the tasks array of initial state obj 
            state.loading = false;
        },
        showError: (state, action) => {
            state.error = action.payload.error;
            state.loading = false; 
        },   // Adding the SHOW_ERROR action here to show the error inside of redux-dev tools.
        addTask: (state, action) => {  // Getting the action type from the addTask var
            state.tasks.push(action.payload.task); // Modifying it to add Tasks using backend Server.
        },
        removeTask: (state, action) => {
            const index = state.findIndex(task => task.id === action.payload.id);
            state.tasks.splice(index, 1);  // Finde sthe index of value and then remives 1 value starting from that index.
            // We are using this approach instead of filter as filter method would not update the final state of app.
        },
        taskCompletedd: (state, action) => {
            const index = state.findIndex(task => task.id === action.payload.id);
            state.tasks[index].completed = action.payload.completed;  // Getting the value of specific index of state array and updating its completed status
        }
    },
    // extraReducers: {
    //     [fetchTasks.pending]: (state, action) => {
    //         state.loading = true;
    //     },
    //     [fetchTasks.fulfilled]: (state, action) => {
    //         state.tasks = action.payload.tasks;
    //         state.loading = false;
    //     },
    //     [fetchTasks.rejected]: (state, action) => {
    //         state.error = action.payload.error;
    //         state.loading = false;
    //     },
    // }
    // We also dont need these extraReducers when we have created a middleware function.
});

export const {apiRequested, getTasks, showError, addTask, removeTask, taskCompletedd} = slice.actions;   // Exporting the actions from slice
export default slice.reducer; 

export const loadTasks = () => apiCallback({
    url: "/tasks",
    method: 'GET',   // By default it is always GET method in axios.
    onStart: apiRequested.type,
    onSuccess: getTasks.type,
    onError: showError.type,
});

export const addingTask = (task) => apiCallback({
    url: '/tasks',
    method: 'POST',
    data: task,
    onSuccess: addTask.type,
});   // For adding new task to our application state

export const updatingTask = (task) => apiCallback({
    url: `/tasks/${task.id}`,
    method: 'PATCH',
    data: task,   // Here data property behaves as the body object as well for the api request
    onSuccess: taskCompletedd.type,   // Naming it so that it doesnt clash with other task-toolkit file.
});   // For Updating a task and setting it to completed based on backend response.

export const deletingTask = (task) => apiCallback({
    url: `/tasks/${task.id}`,
    method: 'DELETE',   
    onSuccess: removeTask.type,
});   // For Deleting a task base don its id using backend api.

// NOTES: (SEC 7)
// Now in this file we will use createAsyncThunk method to make Api request to our backend server using redux-toolkit.
// For this we can define our new obj if needed to store and save the state changes.
// The Async Thunk method itself contaisn thee actions: Pending, Fulfilled and Rejected.
// When data is beign fetched the action executed in pending one.
// When data is successfully fetched it executes the fulfilled action.
// When data contains errors then it executes the rejected function.
// We can create all these function in the slice object using the extraReducers key.
// The syntax for adding functionality to these new reducers is same as others.
// For showing the entire state object with loading and error we have to pass the entire inital state object to the AsyncThunk return block else it will only show things which we will pass to it. Also for extra reducers we have to update all the properties of the object as well.
// We have moved apiCallback function to this file to make it more generlaized an deasy to understand.
// We can also assign values using 'action.type' or we can simple type in the action inside of 'actioName' to loadTask func
// For every new api request or new action we have to create a new function which will execute the middleware function based on its requirements.
// Also we have to make necessary changes based on the api response to our reducers code.