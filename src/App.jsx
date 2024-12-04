import React, {useState} from 'react';
import TaskList from './components/Tasklist';
import TaskForm from './components/Taskform';
import TaskFilter from './components/Taskfilter';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = (taskName) => {
    setTasks([...tasks, { id: Date.now(), name: taskName, completed: false}]);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) => task.id === taskId ? { ...task, completed: !task.completed} : task)
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });


  return(
    <div className='mainApp'>
        <h1>Task Manager</h1>
        <TaskList tasks={filteredTasks} toggleTaskCompletion={toggleTaskCompletion}/>
        <TaskForm addTask={addTask} />
        <TaskFilter filter={filter} setFilter={setFilter} /> 
        <TaskForm addTask={addTask} />
        
    </div>
  )

}
export default App;
