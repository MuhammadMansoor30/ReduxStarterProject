import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addingTask} from '../store/task-toolkit-apis';

const AddTask = () => {
    const dispatch = useDispatch();
    const [task, setTask] = useState('');

    function handleSubmit (e){
        e.preventDefault();
        dispatch(addingTask({task: task}));
        setTask('');
    };

    return (
        <form>
            <input type='text' placeholder='Enter New Task' value={task} onChange={e => setTask(e.target.value)}></input>
            <button type='submit' onClick={handleSubmit}>Add Task</button>
        </form>
    )
}

export default AddTask;

// NOTES (SEC 8):
// Excercise for adding task usign react-redux library.