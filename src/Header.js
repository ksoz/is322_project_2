import React from 'react';
import './index.css';

const Header = (props) => {
    return (
        <div id="header">
            <h1>{props.title}</h1>
        </div>
    )
}

Header.defaultProps = {
    title: 'Task Manager',
}

export default Header;