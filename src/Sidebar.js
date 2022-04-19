import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import Content from './Content';
import Button from './Button';
import AddTaskForm from './AddTaskForm';
import Header from './Header';
import Footer from './Footer';

const Sidebar = () => {

    const AddTaskFormBtn = () => {
        <Content page={AddTaskForm} currentPageIsAddTask={true} currentPageIsTaskBoard={false}/>
    }
    return (
        <div id="sidebar">
            <ul id="nav_options">
                <li><Button color='white' text='Taskboard'/></li>
                <li><Button onClick={AddTaskFormBtn} color='green' text='Add Task'/></li>
                <li><Button color='yellow' text='Search'/></li>
            </ul>
        </div>
    )
}

export default Sidebar;
