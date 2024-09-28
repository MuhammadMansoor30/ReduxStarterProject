import axios from "axios";
import {apiCallback} from '../generalApi';

const api = ({dispatch}) => next => async (action) =>{
    // if(action.type !== 'apiRequest'){
    //     return next(action);   // Execute next middleware if action type is not apiRequest.
    // }

    if(action.type !== apiCallback.type){
        return next(action);   // Creating and using a general Api action and using its type
    }

    const {url, method, data, onStart, onSuccess, onError} = action.payload;

    if(onStart){
        dispatch({type: onStart, payload: {
            tasks: [],
            loading: true,
            error: null
        }});   // Dispatch the onStart action defined in app.js file if action type is true.    
    }

    try {
        const response = await axios.request({
            baseURL: 'http://localhost:7333/api',
            url,
            method,
            data 
        });

        dispatch({type: onSuccess, payload: {
            tasks: response.data,
            loading: false,
            error: null,
        }});
    } catch (err) {
        dispatch({type: onError, payload: {
            tasks: [],
            loading: false,
            error: err.message
        }});
    }
};

export default api;

// NOTES: (SEC 7)
// Creating the middleware for seng backend requests.
// We will retrieve some information from the request payload.
// Here url will be the our destination, method is the request methods of get, post etc,
// OnSuccess and onError are actions whihc will execte the desired redux actions.
// In the middleware wher we use store we can also directy call the dispacth metjod using object destruction way like ({dispatch}).
// Or we can use store to execute the method like (store.dispatch(action))
// If we have configured middleware to fetcgData or perform server fucntions then we dont need separate api function inside of the main file where slice is being defined in this case its 'task-toolkit-api.js'.
// For showing the entire state object with loading and error we have to pass the entire object to the dispatch method else it will only show things which we will pass to it.