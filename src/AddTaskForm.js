import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Content from './Content';
import AddTask from './AddTask.js';

const AddTaskForm = () => {
    const content = document.querySelector('#content');
    var h = 'hello';
    return (
        <div class="add_form">
            <form class="add_container">
            <label>Task Name</label> <br/>
            <input id="task-name-input" name="taskname" type="text" placeholder="Enter task name here"/>
            <label>Task Description</label> <br/>
            <input id="task-desc-input" name="taskdesc" type="text" placeholder="Enter task info here"/>
            <button id="add_task_bt" onClick={this.AddTask}>Add Task</button>
            </form>
        </div>
    )
};

export default AddTaskForm;