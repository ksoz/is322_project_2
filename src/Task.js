import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Task = ({task}) => {
    return (
        <div className='card'>
            <h3>
            {task.name}<FontAwesomeIcon style={{color: 'red', cursor: 'pointer', float: 'right',}} icon={faTimes} />    
            </h3>
            <div className="card_content">
                <p>{task.description}</p>
            </div>
        </div>
    )
}
export default Task;