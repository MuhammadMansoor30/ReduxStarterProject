import * as actionTypes from './actionTypes';

let id = 0;
function reducer(state=[], action) {
    switch(action.type){   // action object has properties among ehich one is the type of action which we will define
        case actionTypes.ADD_TASK:
            return [
                ...state,   // Take the default state and add new things to it
                {
                    id: ++id,
                    task: action.payload.task,   // bisecting the action object to get payload and from it getting task name.
                    completed: false,   // By default the task is always incompleted

                    // We can add more values to it as per our needs
                }
            ];
        case actionTypes.REMOVE_TASK:
            return state.filter(task => task.id !== action.payload.id);  // Filtering state based on payload id
        
        case actionTypes.TASK_COMPLETED:
            return state.map(task => 
                task.id === action.payload.id ?
                {... task, completed: true} : task
            );   // Updating the task based on its id
        
        default:
            return state;   // If action doesnt exist return the deafult state.
    }
}

export default reducer; 

// NOTES:
// In redux we have to define 3 things:
// 1. Design Store  (That manages the state of the application and has multiple state objects)
// 2. Actions (What to do if the state of a specific thing changes)
// 3. Create Reducer (A function to tell the store and application how to change the state) using actions defined.
// 4. Create Store (using the redux library).
// 5. Define Actions code and then dispatch those actions using store.
// Recucer takes two arguments a state argument which define sthe current state by default its an empty array.
// 2nd argument is the action which tells us what actions we have to perform when state changes.
// Reducer function conatins the entire logic of what happens when specfic actions are executed.
// We can write reducer function using if-else or switch block.