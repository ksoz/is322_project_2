import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Task = ({task, onDelete, updateTask}) => {
    return (
        <div className='card'>
            <h3>
            {task.name}<FontAwesomeIcon style={{color: 'red', cursor: 'pointer', float: 'right',}} icon={faTimes} onClick={() => onDelete(task.id)}/>    
            </h3>
            <div className="card_content">
                <p>{task.description}</p>
                <input type="submit" value="Update" onClick={updateTask}/>
            </div>
        </div>
    )
}
export default Task;