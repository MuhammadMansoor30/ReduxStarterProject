import axios from "axios";

const api = ({dispatch}) => next => async (action) =>{
    if(action.type !== 'apiRequest'){
        return next(action);   // Execute next middleware if action type is not apiRequest.
    }

    const {url, method, data, onStart, onSuccess, onError} = action.payload;

    if(onStart){
        dispatch({type: onStart});   // Dispatch the onStart action defined in app.js file if action type is true.    
    }

    try {
        const response = await axios.request({
            baseURL: 'http://localhost:7333/api',
            url,
            method,
            data 
        });

        dispatch({type: onSuccess, payload: response.data});
    } catch (error) {
        dispatch({type: onError, payload: {error: error.message}});
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