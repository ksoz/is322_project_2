import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

function GetTasks(results) {
    const toDoList = document.querySelector('#col_to_do');
    const inProgList = document.querySelector('#col_in_progress');
    const finList = document.querySelector('#col_fin');

    var colRows = results.map(function(results, index) {
        return '<div class="card"> <div class="card_content">' + results.id + '<br>' + results.description + '<br>' + results.user + '<br>' 
            + '</div> <div class="card_footer">' + results.date + '</div></div>';
    });

    colRows.forEach(function (row) {
        toDoList.innerHTML += row;
    });
}

export default GetTasks;