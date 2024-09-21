import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

// Actions
// export const addTask = createAction("ADD_TASK");
// export const removeTask = createAction("REMOVE_TASK");
// export const taskCompleted = createAction("TASK_COMPLETED");

// // Reducer
let id = 0;
// const reducer = createReducer([], (builder) => {
//     builder
//         .addCase(addTask.type, (state, action) => {  // Getting the action type from the addTask var
//             state.push({
//                 id: ++id,
//                 task: action.payload.task,
//                 completed: false,
//             });
//         })
//         .addCase(removeTask.type, (state, action) => {
//             const index = state.findIndex(task => task.id === action.payload.id);
//             state.splice(index, 1);  // Finde sthe index of value and then remives 1 value starting from that index.
//             // We are using this approach instead of filter as filter method would not update the final state of app.
//         })
//         .addCase(taskCompleted.type, (state, action) => {
//             const index = state.findIndex(task => task.id === action.payload.id);
//             state[index].completed = true;  // Getting the value of specific index of state array and updating its completed status
//         })
// }); 

//export default reducer; 

const slice = createSlice({
    name: "Tasks",  // Giving slice a name 
    initialState: [], // Giving state of an empty array.
    reducers: {
        // action: function  // This is the syntax of writing reducers inside of slice
        addTask: (state, action) => {  // Getting the action type from the addTask var
            state.push({
                id: ++id,
                task: action.payload.task,
                completed: false,
            })
        },
        removeTask: (state, action) => {
            const index = state.findIndex(task => task.id === action.payload.id);
            state.splice(index, 1);  // Finde sthe index of value and then remives 1 value starting from that index.
            // We are using this approach instead of filter as filter method would not update the final state of app.
        },
        taskCompleted: (state, action) => {
            const index = state.findIndex(task => task.id === action.payload.id);
            state[index].completed = true;  // Getting the value of specific index of state array and updating its completed status
        }
    }
});

console.log(slice);
export const {addTask, removeTask, taskCompleted} = slice.actions;   // Exporting the actions from slice
export default slice.reducer;   // For exporting the reducer functions of slice.

// NOTES:
// (SEC 5)
// Creating Reducers and Actions using redux-toolkit.
// We dont need to define action types here as the createAction function takes argument which is our action Type.
// And in reducer we can access it using the (actionName).type keyword.
// The Redux-toolkit can be used to create the reducer function as well saving us alot of code writing.
// We can create slices usign redux toolkit which simplifies the process of creating reducers thus making stte management more easier.
// The createSlice object contains all the info about the reducers, action adn there types thus helping in code management.
// We can alternatively use createSlice or createReducer approach whichever we like.