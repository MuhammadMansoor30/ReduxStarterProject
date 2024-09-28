// import store from "./store/configureStore";   // Traditional way to create store.
import store from "./store/configureStore-toolkit";   // Modern way to create store suing redux-toolkit.
import { addEmployee, removeEmployee } from "./store/employee";   // For Practicing of redux-toolkit
import { getTasks, addTask, removeTask, taskCompleted } from "./store/task-toolkit";  // Using redux-toolkit approach
import { addingTask, fetchTasks, updatingTask, loadTasks, deletingTask } from "./store/task-toolkit-apis";
// import { addTask, removeTask, taskCompleted } from "./store/task";  // If we are using DuckModule approach
// import { addTask, removeTask, taskCompleted } from "./store/actions";  // For Separte Files
import axios from 'axios';

function app() {
    console.log('Redux Starter Project');
    // console.log(store.getState());   // Executes the store and gets the current state of store from reducer.
    // reduxPrac();
    // reduxPracEmp();   // Commeting them so that we can practice logic of redux using backend
    // gettingTasks();  // getting tasks from backend server.
    // store.dispatch(fetchTasks());    // Fetching tasks from server using AsyncThunk method
    // store.dispatch({   // dispatching the api requets using the api middleware
    //     type: 'apiRequest',
    //     payload: {
    //         url: "/tasks",
    //         method: 'GET',   // By default it is always GET method in axios.
    //         onStart: 'apiRequested',
    //         onSuccess: 'getTasks',
    //         onError: "SHOW_ERROR",
    //     }  // Passing the onSuccess and onError actions along with getTaks method to get tasks
    // });

    store.dispatch(loadTasks());    // Making the Api request using the General API Action
    store.dispatch(addingTask({task: 'Task Added From Frontend Redux'}));   // Api request for adding task
    store.dispatch(updatingTask({id: 6, completed: true}));
    store.dispatch(deletingTask({id: 7}));
}

// (SEC 7) Creating Api Request and dispacthing actions using backend.
const gettingTasks = async () => {
    try {
        const response = await axios.get('http://localhost:7333/api/tasks');
        console.log(response.data);

        store.dispatch(getTasks({tasks: response.data}));  // We have to call the action method inside of dispatch function.
    } 
    catch (error) {
        store.dispatch({type: "SHOW_ERROR", payload:{error: error.message}});    
    }
};

// (Sec 5 exercise)
function reduxPracEmp(){
    store.dispatch(addEmployee({name: 'Hamid'}));   // Adding task to payload object using redux-toolkit. 
    console.log("Employee", store.getState());
    store.dispatch(addEmployee({name: 'Adil'}));
    console.log("Employee", store.getState());
    store.dispatch(removeEmployee({id: 1}));
    console.log(store.getState());

    store.dispatch({type: "SHOW_ERROR", payload: {error: "User Not Found"}}); // Testing error middleware created.
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