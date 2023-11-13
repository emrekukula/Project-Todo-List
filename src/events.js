export { collapseEvent, newProjectEvent, newTaskEvent, todayButton, inboxButton, homeButton, taskDelete, addTask,
          extendButton, checkbox, editTask, changeInputContent, changeBackground, projectDelete, clearStorage, };
import { createProjectContainer } from './sidebar';
import { getProjectInput, getTaskInput, getPriority, getDate, getEditValues, getInputChange} from './values'
import * as exports from './task'
import { renderButtons, renderStoredData } from './storage';

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

    function clickEvent(e) {
        e.preventDefault();

        let input = getProjectInput();
        createProjectContainer(input);
        setProjectStorage();

        projectDelete();
        
        addBtn.removeEventListener('click', clickEvent);

        addEvent();
    }
    
    addBtn.addEventListener('click', clickEvent);
    }

function setProjectStorage() {
    localStorage.setItem('project', getProjectInput());
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
let taskCount = 0;

function addTask() {
    const submitTaskBtn = document.querySelector('.submit-task-button');
    const taskForm = document.querySelector('.task-form');

    function taskButtonHandler(e) {
        e.preventDefault();

        createTaskContainer(getTaskInput(), getPriority(), getDate());
        taskForm.reset();
        taskDelete();
        extendButton();
        checkbox();
        editTask();
        changeInputContent();
        changeBackground();

        submitTaskBtn.removeEventListener('click', taskButtonHandler);

        addTask(); // same as line 80
    }
    submitTaskBtn.addEventListener('click', taskButtonHandler);
}

function changeBackground() {
    const taskDiv = document.querySelector('.task-div');

    taskDiv.classList.remove('bgImageOn')
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
    const taskInputContainer = document.querySelectorAll('.task-input-container');
    const taskDiv = document.querySelector('.task-div');

    deleteTaskBtn.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();

            btn.closest('div').parentNode.parentNode.remove();
            removeFromStorage(btn);


            if (taskInputContainer.length == 1) {
                taskDiv.classList.add('bgImageOn');
            }
        })
    })
}

function removeFromStorage(btn) {
    const input = btn.closest('div').parentNode.querySelector('.input-div').textContent;
    localStorage.removeItem(input);
}

function extendButton() {
    const extendBtn = document.querySelectorAll('.extend-button');

    extendBtn.forEach((btn, i) => {

        // Check if a click event listener is already attached
        if (!btn.hasEventListener) {
            btn.hasEventListener = true; 

            btn.addEventListener('click', e => {
                e.preventDefault();

                console.log(btn, i);

                const extendDiv = btn.parentNode.parentNode.querySelector('.extend-div');

                if (extendDiv.classList.contains('none')) {
                    console.log('click none');
                    extendDiv.classList.remove('none');
                    extendDiv.style.display = 'flex';
                    extendDiv.classList.remove('extended');
                } else {
                    extendDiv.style.display = 'none';
                    extendDiv.classList.add('none');
                    extendDiv.classList.add('extended');
                }
            });
        }
    });
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
    const inputDiv = document.querySelectorAll('.input-div');
    const checkbox = document.querySelectorAll('input[type="checkbox"]');
    const dateDiv = document.querySelectorAll('.date-div');

    inputDiv.forEach( (div, i) => {
        div.addEventListener('click', () => {

            checkbox[i].parentNode.insertBefore(formOnClick(), dateDiv[i]);
            submitInputChange();
            inputDiv[i].textContent = '';
        })
    });
}

function submitInputChange() {
    const contentForm = document.querySelectorAll('.content-form');
    const inputDiv = document.querySelectorAll('.input-div');
    const contentInput = document.querySelectorAll('.content-input');

    contentInput.forEach( (input, i) => {
        input.addEventListener('keypress', () => {
            if ( input.key == 'Enter' ) {
                input.preventDefault();
    
                inputDiv[i].textContent = getInputChange(i);
                contentForm[i].remove();
            }
        })
    })
}

let inboxContent;

function todayButton() {
    const todayButton = document.querySelector('.today');
    const inboxButton = document.querySelector('.inbox');
    const taskContainer = document.querySelector('.task-container');
    
    todayButton.addEventListener('click', e => {
        e.preventDefault();

        inboxContent = taskContainer.innerHTML;
        taskContainer.textContent = '';
        todayButton.setAttribute('disabled', '');
        inboxButton.removeAttribute('disabled');
    })
}

function inboxButton() {
    const inboxButton = document.querySelector('.inbox');
    const todayButton = document.querySelector('.today');
    const taskContainer = document.querySelector('.task-container');

    inboxButton.addEventListener('click', e => {
        e.preventDefault();

        taskContainer.innerHTML = inboxContent;
        inboxButton.setAttribute('disabled', '');
        todayButton.removeAttribute('disabled');
        renderButtons();
        newTaskEvent();
    })
}

function homeButton() {
    const homeButton = document.querySelector('.home');
    const inboxButton = document.querySelector('.inbox');
    const todayButton = document.querySelector('.today');
    const taskContainer = document.querySelector('.task-container');

    homeButton.addEventListener('click', e => {
        e.preventDefault();

        taskContainer.innerHTML = inboxContent;
        inboxButton.setAttribute('disabled', '');
        todayButton.removeAttribute('disabled');
    })
}

function clearStorage() {
    const button = document.querySelector('.clear-storage-button');
    const tasks = document.querySelectorAll('.task-input-container');
    const projects = document.querySelectorAll('.input-container');

    button.addEventListener('click', e => {
        e.preventDefault();

        localStorage.clear();
        // tasks.forEach( e => {
        //     if ( e.length === 1) {
        //         e[0].remove();
        //     } else {
        //         e.remove();
        //     }
        // });
        // projects.forEach( e => e.remove());
    })
}