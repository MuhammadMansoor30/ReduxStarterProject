import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {loadTasks} from '../store/task-toolkit-apis';
// import { useContext } from 'react';   // Use only while using traditional Approach.
// import StoreContext from '../contexts/StoreContext';

const Tasks = () => {
  const dispatch = useDispatch();  // Used for dispatching redux action.
  const tasks = useSelector(state => state.tasks); //  Gets the state of the store object;
  //const {tasks, loading} = useSelector(state => state.tasks);  // Can destructure it to get necessary values only

  useEffect(() => {
    dispatch(loadTasks());
  
  }, []);

  return (
    <div>
      {tasks.map(task => (
        <p key={task.id}>{task.task}</p>
      ))}
    </div>
  )
}

export default Tasks;

// NOTES (SEC 8):
// In React we can implement redux using two methods.
// One is the traditional method and other is the react-redux library method.
// The traditional Methods is longer and react-redux library method is shorter.
// Also, type (rafc) to create bioler plate for React functional Component.
// Inside of useEffect we call teh subscribe method to notify teh useStste obj about the stste changes.
// If we dont use unsubscibe then it will alwsys work the subscribe method even if we are in other components causing memory leak issue.
// So we use the cleanup function of useEffect which is the return function it clears unsubscribe the state obj so that no memory leak occurs.
// React Redux library can only be used with functional components.
// Using hooks like useDispatch and useSelector we can dispatch actions to the store sn also check out the state changes and get that state.
// These hooks are similar to the action we can perform usign our traditional store object using methods.


// Code using Tradtional approach using React context
// const Tasks = () => {
//   const store = useContext(StoreContext);
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     store.dispatch(loadTasks());   // Loading and getting all our tasks.

//     const unsubscribe = store.subscribe(() => {
//       const storeTasks = store.getState().tasks;
//       if(storeTasks !== tasks){
//         setTasks(storeTasks);
//       }
//     });

//     return () =>{
//       unsubscribe();
//     }  

//   }, []);   // Using useEffect here so that it renders and gets tasks as soon as component mounts.

//   return (
//     <div>
//       {tasks.map(task => (
//         <p key={task.id}>{task.task}</p>
//       ))}
//     </div>
//   )
// }