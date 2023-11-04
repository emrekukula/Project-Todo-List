import { nav } from './nav.js'
import { sidebar } from './sidebar.js'
import { task } from './task.js'
import "./style.css"
import _ from 'lodash';

function render() {
    const div = document.getElementById('content');

    div.appendChild(nav());

    const contentBody = document.createElement('div');
    contentBody.classList.add('content-body');
    div.appendChild(contentBody);

    contentBody.appendChild(sidebar());
    contentBody.appendChild(task());

}

render();