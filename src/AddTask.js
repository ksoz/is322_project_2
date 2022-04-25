import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';

const AddTask = ({add_task}) => {
    const [text, setText] = ('')
    return (
        <form className='add_form'>
            <div className="form_control">
            <label>Add Task</label> <br/>
            <input type="Text" placeholder="add task" value={text} onChange={(e) => setText(e.target.value)}/> <br/>
            </div>

            <input type="submit" value="Save" onClick={add_task}/>

        </form>
    )
}
export default AddTask;