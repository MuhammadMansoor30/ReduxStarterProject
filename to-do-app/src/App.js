import './App.css';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
// import StoreContext from './contexts/StoreContext';
// import store from './store/configureStore-toolkit';

function App() {
  return (
    // <StoreContext.Provider value={store}>
    //   <Tasks />
    // </StoreContext.Provider>
    <>
    <AddTask />
    <Tasks />
    </>
  );
}

export default App;

// NOTES (SEC 8):
// Creating a StoreContext and using it to pass the store value down the components hierarchy.
// The value props holds the value of store and passe sit down the DOM tree of React. 
// Commenting all the conext code after using the react-redux library so we dont need it.