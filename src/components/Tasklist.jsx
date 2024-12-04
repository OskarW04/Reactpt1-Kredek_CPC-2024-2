import React from 'react';

const Tasklist = ({tasks, toggleTaskCompletion}) => {
    if(tasks.length === 0) {
        return <p>No tasks available</p>
    }


    return(
        <ul style={{listStyle: 'none', padding: 0}}>
            {tasks.map((task) => (
                <li className='listElement'
                    key={task.id}
                    style={{
                        textDecoration: task.completed ? 'line-through' : 'none',
                        color: task.completed ? 'green' : 'black',
                    }}
                >
                    <span className='listFinish'
                        onClick={() => toggleTaskCompletion(task.id)}
                    >
                        {task.name}
                    </span>
                </li>
            ))}
        </ul>
    )
}

export default Tasklist;