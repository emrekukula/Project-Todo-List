export { collapseEvent, newProjectEvent, newTaskEvent };
import { createProjectContainer } from './sidebar';
import { getProjectInput, getTaskInput, getPriority, getDate, getEditValues, getInputChange} from './values'
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
    })
    addEvent();
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

        addEvent();
    }
    
    addBtn.addEventListener('click', addButtonClickHandler);
    }

function newTaskEvent() {
    const taskBtn = document.querySelector('.taskBtn');
    
    taskBtn.addEventListener('click', () => {
        
        showTaskForm();  
        cancelTask();
    })
    addTask(); // Had to put this here otherwise can press  add task button multiple times.

}

function showTaskForm() {
    const form = document.querySelector('.task-form');
    form.classList.remove('none');
}


function addTask() {
    const submitTaskBtn = document.querySelector('.submit-task-button');
    const taskForm = document.querySelector('.task-form');
    
    function addButtonClickHandler(e) {
        e.preventDefault();

        createTaskContainer(getTaskInput(), getPriority(), getDate());
        taskForm.reset();
        taskDelete();
        extendButton();
        checkbox();
        editTask();
        changeInputContent();
        
        submitTaskBtn.removeEventListener('click', addButtonClickHandler);

        addTask(); // same as line 80
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
    const projectDeleteBtn = document.querySelectorAll('.project-delete-button');

    projectDeleteBtn.forEach((btn) => {
        btn.addEventListener('click', e => {
            e.preventDefault();

            btn.closest('div').remove()
        })
    })
}

function taskDelete() {
    const deleteTaskBtn = document.querySelectorAll('.delete-task-button');

    deleteTaskBtn.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();

            btn.closest('div').remove();
        })
    })
}

function extendButton() {
    const extendBtn = document.querySelectorAll('.extend-button');
    const extendContainer = document.querySelectorAll('.extend-container');
    
    extendBtn.forEach((btn) => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            
            btn.closest('div').querySelector('.extend-div').classList.remove('none');
            console.log(btn.closest('div'));
        })
    })
}   

function checkbox() {
    const checkbox = document.querySelectorAll('input[type="checkbox"]')

    checkbox.forEach( checkbox => {

        checkbox.addEventListener('click', e => {

            if ( checkbox.checked === true) {
                checkbox.closest('div').querySelector('.input-div').classList.add('strike');
                checkbox.closest('div').querySelector('.date-div').classList.add('strike');
            } else {
                checkbox.closest('div').querySelector('.input-div').classList.remove('strike');
                checkbox.closest('div').querySelector('.date-div').classList.remove('strike');
            }
        })  
    });
}

function editTask() {
    const editBtn = document.querySelectorAll('.edit-button');
    const taskForm = document.querySelector('.task-form');
    const taskInput = document.querySelector('.task-input');
    const dateInput = document.querySelector('input[type="date"]');
    const prioInput = document.querySelector('#priority-dropdown');

    editBtn.forEach( (button, i)=> {
        
        button.addEventListener('click', e => {
            e.preventDefault();

            taskForm.classList.remove('none');
            
            const values = getEditValues(i);
            taskInput.value = values.inputValue;
            dateInput.value = values.dateValue;
            prioInput.value = values.prioValue;
            
            button.closest('div').parentNode.remove()
        })
    })
}

function changeInputContent() {
    const inputDiv = document.querySelector('.input-div');
    const checkbox = document.querySelector('input[type="checkbox"]');
    const dateDiv = document.querySelector('.date-div');

    inputDiv.addEventListener('click', () => {
        checkbox.parentNode.insertBefore(exports.formOnClick(), dateDiv);
        submitInputChange();
        inputDiv.textContent = '';
    })
}

function submitInputChange() {
    const contentForm = document.querySelector('.content-form');
    const inputDiv = document.querySelector('.input-div');
    const contentInput = document.querySelector('.content-input');

    contentInput.addEventListener('keypress', e => {
        
        if ( e.key == 'Enter' ) {
            e.preventDefault();

            inputDiv.textContent = getInputChange();
            contentForm.remove();
        }
    })
}