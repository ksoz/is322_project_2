import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

import App from './App';
import Tasks from './Tasks';
import AddTask from './AddTask';

const Content = ({page, toDoList, progressList, finList, currentPageIsAddTask, currentPageIsTaskBoard}) => {
        return (
            <div id="content">
                <AddTask/>
                <div id="col_to_do">
                    <h3>To Do</h3>  
                    {toDoList}
                </div>
                <div id="col_in_progress">
                    <h3>In Progress</h3>
                    {progressList}
                </div>
                <div id="col_fin">
                    <h3>Finished</h3>
                    {finList}
                </div>
            </div>
        );
}

Content.defaultProps = {
    list: <Tasks/>,
    page: null,
    currentPageIsTaskBoard: true,
    currentPageIsAddTask: false,
}

Content.propTypes = {
    currentPageIsTaskBoard: PropTypes.bool.isRequired,
    currentPageIsAddTask: PropTypes.bool.isRequired,
}
export default Content;