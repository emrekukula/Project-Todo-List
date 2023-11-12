export { renderButtons, renderStoredData };
import { createTaskContainer } from "./task";
import { changeBackground, changeInputContent, checkbox, editTask, extendButton, projectDelete, taskDelete } from './events'
import { addTask } from './events'
import { createProjectContainer } from "./sidebar";

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

function renderProjects() {
    createProjectContainer(getStoredProject());
}

function getStoredProject() {
    return localStorage.getItem('project');
}

function renderTasks() {
    createTaskContainer(getTaskStorage().input, getTaskStorage().priority, getTaskStorage().date);
}

function getTaskStorage() {
    console.log(localStorage)
    return JSON.parse(localStorage.getItem('task'));
}