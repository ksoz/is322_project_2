//Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './Header.js';
import Content from './Content.js';
import Sidebar from './Sidebar.js';
import Footer from './Footer';
import Tasks from './Tasks';
import AddTaskForm from './AddTaskForm';
import {useState} from 'react';
//Create Basic Functional React Component

const App = () => {
    const [tasks, setTasks] = useState([
        {   
            id: 1, 
            name: 'task 1', 
            description: 'placeholder description', 
            user: 'kyle', 
            date: '04102022', 
            task_new: true, 
            task_in_progress: false, 
            task_finished: false,
        },
        {
                id: 2, 
                name: 'task 2', 
                description: 'placeholder description 2', 
                user: 'kyle', 
                date: '04102022', 
                task_new: true, 
                task_in_progress: false, 
                task_finished: false,
            }])
    return (
            <div className="container">
                <Header/>
                <Content list={<Tasks tasks={tasks}/>}/>
                <Sidebar/>
                <Footer/>
            </div>
    );
}


export default App;