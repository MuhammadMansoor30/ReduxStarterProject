import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

let id = 0;

// Actions
// export const addEmployee = createAction("ADD_EMPLOYEE");
// export const removeEmployee = createAction("REMOVE_EMPLOYEE");

// Reducer
// const reducer = createReducer([], (builder) => {
//     builder
//         .addCase(addEmp.type, (state, action) => {  // Getting the action type from the addTask var
//             state.push({
//                 id: ++id,
//                 task: action.payload.name,
//             });
//         })
//         .addCase(removeEmp.type, (state, action) => {
//             const index = state.findIndex(emp => emp.id === action.payload.id);
//             state.splice(index, 1);
//         })
// });

// Slice
const employeeSlice = createSlice({
    name: 'Employee',
    initialState: [],
    reducers: {
        addEmployee:(state, action) => {  // Getting the action type from the addTask var
            state.push({
                id: ++id,
                task: action.payload.name,
            });
        },
        removeEmployee: (state, action) => {
            const index = state.findIndex(emp => emp.id === action.payload.id);
            state.splice(index, 1);
        }
    }
});

/// export default reducer;  // For exporting reducer
export const {addEmployee, removeEmployee} = employeeSlice.actions;  // For exporting actions from slice
export default employeeSlice.reducer; // For exporting reducer from employee Slice.

// NOTES: (SEC 5) 
// Exercise of Redux-toolkit.
// Performed using both Reducers as well as Sliuce methods.