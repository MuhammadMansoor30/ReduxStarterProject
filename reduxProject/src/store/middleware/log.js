const log = store => next => action =>{
    console.log("middlewrae", action);
    next(action);  // Calling the next middleware and passing the action obj to it
};

// Exercise: Creating the error Middleware and checking if action is error or not.
const error = store => next => action =>{
    if(action.type === 'SHOW_ERROR'){
        console.log(action.payload.error);
    }
    else {
        console.log("No error in Store or Action");
        next(action);
    }
}

// const log = function (store) {   // Expanding the currying function in full function syntax tot see its working.
//     return function (next){
//         return function (action){
//             console.log("middlewrae", action);
//             next(action);
//         }
//     }
// }

exports.log = log;
exports.error = error

// NOTES: (SEC 6)
// In redux middleware functions are used to intercept the actions and log those actions so that we can see there changes.
// It is similar to the middleware used in node and express but instead of request and response obj we have store object and action object for specific actions and store in redux.
// The next function is same as in node and express and is used to call the next middleware.
// The middelware in redux is a currying function whcih takes as argumnet a function and return a new function.