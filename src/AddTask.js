import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function AddTask() {
    const toDoList = document.querySelector('#col_to_do');
    const inProgList = document.querySelector('#col_in_progress');
    const finList = document.querySelector('#col_fin');

    toDoList.innerHTML += 
        '<div class="card">' +
            '<div class="card_content"></div>' +
            '<div class="card_footer"></div>' +
        '</div>';
    return console.log('test');
}
export default AddTask;