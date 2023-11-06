export { collapseEvent, newProjectEvent, newTaskEvent };
import { createProjectContainer } from './sidebar';
import { getProjectInput, getTaskInput } from './values'
import * as exports from './task'

// import every function from /task
Object.entries(exports).forEach(([name, exported]) => window[name] = exported);

function collapseEvent() {
    const collapse = document.querySelector('.collapseBtn');
    const sidebarContainer = document.querySelector('.sidebar-container');

    collapse.addEventListener('click', () => {
        const list = [...sidebarContainer.classList];

        if (list.includes('none')) {
            sidebarContainer.classList.add('block');
            sidebarContainer.classList.remove('none');
        } else {
            sidebarContainer.classList.add('none');
            sidebarContainer.classList.remove('block');
        }
    }) 
}

function newProjectEvent() {
    projectBtn.addEventListener('click', (e) => {
        e.preventDefault();

        showProjectForm();
        cancelEvent();
        addEvent();
    })
} 

function showProjectForm() {
    const form = document.querySelector('form');
    form.classList.remove('none');
}

function cancelEvent() {
    const cancelBtn = document.getElementById('cancelBtn');
    const form = document.querySelector('.project-form');

    cancelBtn.addEventListener('click', (e) => {
        e.preventDefault();

        form.classList.add('none');
    })
}

function addEvent() {
    const addBtn = document.querySelector('.addBtn');

    function addButtonClickHandler(e) {
        e.preventDefault();

        let input = getProjectInput();
        createProjectContainer(input);

        projectDelete();
        
        addBtn.removeEventListener('click', addButtonClickHandler);
    }
    
    addBtn.addEventListener('click', addButtonClickHandler);
    }

function newTaskEvent() {
    const taskBtn = document.querySelector('.taskBtn');
    
    taskBtn.addEventListener('click', () => {
        
        // showTaskForm();  
        taskForm();
        cancelTask();
        addTask();
    })
    
}

// function showTaskForm() {
//     const taskBtn = document.querySelector('.taskBtn');
//     taskBtn.classList.add('none');
// }

function addTask() {
    const submitTaskBtn = document.querySelector('.submit-task-button');
    
    function addButtonClickHandler(e) {
        e.preventDefault();

        let input = getTaskInput();
        createTaskContainer(input);
        console.log(input);


        submitTaskBtn.removeEventListener('click', addButtonClickHandler);

    }

    submitTaskBtn.addEventListener('click', addButtonClickHandler);
}

function cancelTask() {
    const cancelBtn = document.getElementById('cancel-task-button');
    const form = document.querySelector('.task-form');

    cancelBtn.addEventListener('click', (e) => {
        e.preventDefault();

        form.classList.add('none');
    })
}

function projectDelete() {
    const projectDeleteBtn = document.querySelector('.project-delete-button');
    // const selectContainer = document.getElementById(id);
    
    projectDeleteBtn.addEventListener('click', () => {
        console.log('xx');
    })
}
