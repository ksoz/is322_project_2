import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

import App from './App';
import Tasks from './Tasks';
import AddTaskForm from './AddTaskForm';

const Content = ({page, list, currentPageIsAddTask, currentPageIsTaskBoard}) => {
    if (currentPageIsAddTask == true)
    {
        return <AddTaskForm/>;
    }
    else {
        return (
            <div id="content">
                <div id="col_to_do">
                    <h3>To Do</h3>  
                    {list}
                </div>
                <div id="col_in_progress">
                    <h3>In Progress</h3>
                </div>
                <div id="col_fin">
                    <h3>Finished</h3>
                </div>
            </div>
        );
    }
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