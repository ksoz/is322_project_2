//Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App.js';
import Header from './Header.js';
import Content from './Content.js';
import Sidebar from './Sidebar.js';
import AddTaskForm from './AddTaskForm';
//Create Basic Functional React Component


// This is the basic card format for adding tasks to the dashboard.
//<div class="card">
//<div class="card_content"></div>
//<div class="card_footer"></div>
//</div>
//Render the component into the DOM
ReactDOM.render(
    <App/>,
    document.querySelector('#root'),
);


