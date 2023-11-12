import { nav, collapseBtn } from './nav.js'
import { sidebar } from './sidebar.js'
import { task } from './task.js'
import "./style.css"
import _ from 'lodash';
import { clearStorage, collapseEvent, homeButton, inboxButton, newProjectEvent, newTaskEvent, todayButton } from './events'
import { renderStoredData } from './storage.js';

function render() {
    const div = document.getElementById('content');
    
    div.appendChild(nav());
    
    const contentBody = document.createElement('div');
    contentBody.classList.add('content-body');
    div.appendChild(contentBody);
    
    contentBody.appendChild(sidebar());
    contentBody.appendChild(task());
    
    collapseEvent();
    newProjectEvent();
    newTaskEvent();

    todayButton();
    inboxButton();
    homeButton();

    renderStoredData();
    clearStorage();
    console.log(localStorage)
}

render();
