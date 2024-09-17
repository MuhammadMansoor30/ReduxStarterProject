import { legacy_createStore as createStore} from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

export default store;

// NOTES;
// For creating store we will install 'redux' libraray using npm.
// We will use the create store function/method to create the store.
// The create store method takes the root reducer as its argument.
// Root Reducer is a reducer whihc conatins all the different reducers of the application.
// In this case since there is only one reducer so we will import and use it as an argument.
// Export store function to use it in the app.js file or main entrypoint file of your application.