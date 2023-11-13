export { renderButtons, renderStoredData, setTaskStorage, setProjectStorage };
import { createTaskContainer } from "./task";
import { changeBackground, changeInputContent, checkbox, editTask, extendButton, projectDelete, taskDelete } from './events'
import { addTask } from './events'
import { createProjectContainer } from "./sidebar";
import { getTaskInput } from "./values";

function renderStoredData() { 
    renderTasks();
    renderProjects();
    renderButtons();
}

function renderButtons() {
    taskDelete();
    extendButton();
    checkbox();
    editTask();
    changeInputContent();
    changeBackground();
    projectDelete();
}

function renderTasks() {
    Object.keys(localStorage).forEach(function(key){

        createTaskContainer(getTaskStorage(key).input, getTaskStorage(key).priority, getTaskStorage(key).date);
     });
}


function setTaskStorage(input, date, priority) {
    localStorage.setItem(input, JSON.stringify({
        input: input,
        date: date,
        priority: priority,
    }))
}


function getTaskStorage(input) {
    return JSON.parse(localStorage.getItem(input));
}

function renderProjects() {
    Object.keys(localStorage).forEach(function(key){

        // createProjectContainer(getProjectInput(key));
     });
}

function setProjectStorage(input) {
    // localStorage.setItem(input, input);   
}

function getProjectInput(input) {
    return localStorage.getItem(input);
}