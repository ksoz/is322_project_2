//Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './Header.js';
import Content from './Content.js';
import Sidebar from './Sidebar.js';
import Footer from './Footer';
import Tasks from './Tasks';
import AddTask from './AddTask';
import {useState} from 'react';
//Create Basic Functional React Component

const App = () => {
    const [toDoTasks, setToDo] = useState([
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
    ])
    const [progressTasks, setInProgress] = useState([

    ])
    const [finishedTasks, setFinished] = useState([

    ])
    const updateTask = (id, task_new, task_in_progress) => {
        setInProgress(progressTasks.push((toDoTasks) => toDoTasks.id !== id));
    }

    const deleteTask = (id) => {
        setToDo(toDoTasks.filter((toDoTasks) => toDoTasks.id !== id))
    }
    return (
            <div className="container">
                <Header/>
                <Content toDoList={toDoTasks.length > 0  ? <Tasks tasks={toDoTasks} onDelete={deleteTask} updateTask={updateTask}/> : 'No tasks yet.'}
                progressList={progressTasks.length > 0  ? <Tasks tasks={progressTasks} onDelete={deleteTask}/> : 'No tasks yet.'}
                finList={finishedTasks.length > 0  ? <Tasks tasks={finishedTasks} onDelete={deleteTask}/> : 'No tasks yet.'}
                />
                <Sidebar/>
                <Footer/>
            </div>
    );
}


export default App;