// import store from "./store/configureStore";   // Traditional way to create store.
import store from "./store/configureStore-toolkit";   // Modern way to create store suing redux-toolkit.
import { addEmployee, removeEmployee } from "./store/employee";   // For Practicing of redux-toolkit
import { addTask, removeTask, taskCompleted } from "./store/task-toolkit";  // Using redux-toolkit approach
// import { addTask, removeTask, taskCompleted } from "./store/task";  // If we are using DuckModule approach
// import { addTask, removeTask, taskCompleted } from "./store/actions";  // For Separte Files

function app() {
    console.log('Redux Starter Project');
    // console.log(store.getState());   // Executes the store and gets the current state of store from reducer.
    reduxPrac();
    reduxPracEmp();
}

// (Sec 5 exercise)
function reduxPracEmp(){
    store.dispatch(addEmployee({name: 'Hamid'}));   // Adding task to payload object using redux-toolkit. 
    console.log("Employee", store.getState());
    store.dispatch(addEmployee({name: 'Adil'}));
    console.log("Employee", store.getState());
    store.dispatch(removeEmployee({id: 1}));
    console.log(store.getState());
}

// (SEC 5) Using Redux Toolkit
function reduxPrac(){
    store.dispatch(addTask({task: 'Task 1'}));   // Adding task to payload object using redux-toolkit. 
    console.log("Updated", store.getState());
    store.dispatch(addTask({task: 'Task 2'}));
    store.dispatch(taskCompleted({id: 1}));
    console.log(store.getState());
    store.dispatch(removeTask({id: 1}));
    console.log(store.getState());
}

// (SEC 3) Traditional Method
// function reduxPrac(){
//     store.subscribe(() => {
//         console.log("Updated", store.getState());
//     });
//     // The subscribe method takes a callback function adn it is executed everytime when the state of the application id updated.
    
//     // const unsubscribe = store.subscribe(() => {
//     //     console.log("Updated", store.getState());
//     // });
//     // If we store this subscribe method in unsubscribe named variabel and call it then it wont tell us about state changes.
//     store.dispatch(addTask('Task 1')); // The dispatch method is used to update the store using reducer based on the action type.
//     store.dispatch(addTask('Task 2'));
//     store.dispatch(taskCompleted(1));
//     console.log(store.getState());
//     store.dispatch(removeTask(1));
//     // unsubscribe();   // Now it wont notify us anbout the state updating
//     console.log(store.getState());
// }

export default app;