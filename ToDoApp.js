// src/TodoApp.js
import React, { useState } from 'react';

const TodoApp = () => {
    const [task, setTask] = useState(''); // State for the new task
    const [tasks, setTasks] = useState([]); // State for the list of tasks

    // Function to handle input change
    const handleInputChange = (event) => {
        setTask(event.target.value);
    };

    // Function to add a new task
    const addTask = () => {
        if (task) { // Check if the task is not empty
            setTasks([...tasks, task]); // Add the new task to the list
            setTask(''); // Clear the input field
        }
    };

    // Function to remove a task
    const removeTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index); // Filter out the task to be removed
        setTasks(newTasks); // Update the tasks state
    };

    return (
        <div>
            <h1>To-Do App</h1>
            <input
                type="text"
                placeholder="Add a new task..."
                value={task}
                onChange={handleInputChange}
            />
            <button onClick={addTask}>Add Task</button>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task} 
                        <button onClick={() => removeTask(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
