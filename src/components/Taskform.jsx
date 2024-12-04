import React, { useState } from 'react';

const Taskform = ({addTask}) => {
    const [taskName, setTaskName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(taskName.trim()) {
            addTask(taskName);
            console.log(taskName)
            setTaskName('');
        }
    };

    return(
        <form onSubmit={handleSubmit} className='taskForm'>
            <input className='taskInput'
                type='text'
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder='Enter new task'
                />
            <button type='submit' className='taskButton'>
                Add Task
            </button>
        </form>   
    )
}

export default Taskform;
