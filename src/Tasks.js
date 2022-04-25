import React from 'react';
import Task from './Task';
const Tasks = ({tasks, onDelete, updateTask}) => {
    return (
        <div>
            {tasks.map((task) => (
            <Task key={task.id} task={task} onDelete={onDelete} updateTask={updateTask}/>
            ))}
        </div>
    )
}

export default Tasks;