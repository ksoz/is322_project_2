import React from 'react';
import './index.css';

const Footer = (props) => {
    return (
        <div id="footer">
            <h1>{props.footer}</h1>
        </div>
    )
}
Footer.defaultProps = {
    footer: 'IS322 Project 2',
}

export default Footer;