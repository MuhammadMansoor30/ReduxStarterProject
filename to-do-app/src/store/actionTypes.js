const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const TASK_COMPLETED = "TASK_COMPLETED";

module.exports = {
    ADD_TASK,
    REMOVE_TASK,
    TASK_COMPLETED,
};

// NOTES:
// Creating this file so that in case of large application when name of action changes it changes at one place.
// This is done for ease of access and modification of action types.