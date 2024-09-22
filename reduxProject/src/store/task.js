// Implementing the Duck Module by combining all the files action, actionTypes and reducer together.
// This is helful if we have multiple state objects like task state and employees stae as well.
// IF we dont want this old folder strtucture is also good with each state separted in its own folder like tasks and emplyoees.

// Action Types
const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const TASK_COMPLETED = "TASK_COMPLETED";

// Actions
export const addTask = (taskName) => {
    return {type: ADD_TASK, payload: {task: taskName}};
};

export const removeTask = (id) => {
    return {type: REMOVE_TASK, payload: {id: id}};
};

export const taskCompleted = (id) => {
    return {type: TASK_COMPLETED, payload: {id: id}};
};

// Reducer
let id = 0;
function reducer(state=[], action) {
    switch(action.type){   // action object has properties among ehich one is the type of action which we will define
        case ADD_TASK:
            return [
                ...state,   // Take the default state and add new things to it
                {
                    id: ++id,
                    task: action.payload.task,   // bisecting the action object to get payload and from it getting task name.
                    completed: false,   // By default the task is always incompleted

                    // We can add more values to it as per our needs
                }
            ];
        case REMOVE_TASK:
            return state.filter(task => task.id !== action.payload.id);  // Filtering state based on payload id
        
        case TASK_COMPLETED:
            return state.map(task => 
                task.id === action.payload.id ?
                {... task, completed: true} : task
            );   // Updating the task based on its id
        
        default:
            return state;   // If action doesnt exist return the deafult state.
    }
}

export default reducer; 