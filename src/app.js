import store from "./store/configureStore";
import { addTask, removeTask, taskCompleted } from "./store/task";  // If we are using DuckModule approach
// import { addTask, removeTask, taskCompleted } from "./store/actions";  // For Separte Files

function app() {
    console.log('Redux Starter Project');
    // console.log(store.getState());   // Executes the store and gets the current state of store from reducer.
    reduxPrac();
}

function reduxPrac(){
    store.subscribe(() => {
        console.log("Updated", store.getState());
    });
    // The subscribe method takes a callback function adn it is executed everytime when the state of the application id updated.
    
    // const unsubscribe = store.subscribe(() => {
    //     console.log("Updated", store.getState());
    // });
    // If we store this subscribe method in unsubscribe named variabel and call it then it wont tell us about state changes.
    store.dispatch(addTask('Task 1')); // The dispatch method is used to update the store using reducer based on the action type.
    store.dispatch(addTask('Task 2'));
    store.dispatch(taskCompleted(1));
    console.log(store.getState());
    store.dispatch(removeTask(1));
    // unsubscribe();   // Now it wont notify us anbout the state updating
    console.log(store.getState());
}

export default app;