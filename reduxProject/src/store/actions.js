import * as actionTypes from './actionTypes';

export const addTask = (taskName) => {
    return {type: actionTypes.ADD_TASK, payload: {task: taskName}};
};

export const removeTask = (id) => {
    return {type: actionTypes.REMOVE_TASK, payload: {id: id}};
};

export const taskCompleted = (id) => {
    return {type: actionTypes.TASK_COMPLETED, payload: {id: id}};
};

// Notes:
// We craete an action file for every action we want to disptach using the store.
// We dont write logic of actions inside of dispatch as it makes the code look messy and difficult to read.