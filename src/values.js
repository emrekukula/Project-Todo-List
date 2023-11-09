export {getProjectInput, getTaskInput, getPriority, getDate, getEditValues, getInputChange} ;

function getProjectInput() {
    const form = document.querySelector('.project-form');
    const projectInput = document.getElementById('project-input');

    form.classList.add('none');

    let input = projectInput.value;
    return input;
}

function getTaskInput() {
    const form = document.querySelector('.task-form');
    const taskInput = document.querySelector('.task-input');

    form.classList.add('none');

    let input = taskInput.value;

    return input;
}

function getPriority() {
    const select = document.getElementById('priority-dropdown');

    const prio = select.value;

    return prio;
}

function getDate() {
    const schedule = document.querySelector('input[type="date"]');

    const date = schedule.value;

    return date;
}

function getEditValues(i) {
    const inputs = document.querySelectorAll('.input-div');
    const dates = document.querySelectorAll('.date-div');
    const prios = document.querySelectorAll('.prio');

    
    return {
        "inputValue": inputs[i].textContent,
        "dateValue": dates[i].textContent,
        "prioValue": prios[i].textContent,
    };
}

function getInputChange() {
    const contentInput = document.querySelector('.content-input');

    const input = contentInput.value;

    return input;
}