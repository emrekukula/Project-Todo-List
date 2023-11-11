export { task, addTask, taskForm, createTaskContainer, formOnClick };

function task() {
    const content = document.createElement('div');
    content.classList.add('task-container');

    content.appendChild(addTask());

    return content;
}

function addTask() {
    const div = document.createElement('div');
    div.classList.add('task-div', 'bgImageOn');
    
    const button = document.createElement('button');
    button.classList.add('taskBtn');    
    button.textContent = 'Add Task';
    div.appendChild(button);
    
    div.appendChild(taskForm());
    
    return div;
}

function taskForm() {
    const formContainer = document.createElement('div');
    formContainer.classList.add('form-container');

    const form = document.createElement('form');
    form.classList.add('task-form', 'none');;
    formContainer.appendChild(form);

    form.appendChild(prioritySelection());
    
    return formContainer;
}

function prioritySelection() {
    const div = document.createElement('div');
    div.classList.add('priority');

    const input = document.createElement('input');
    input.classList.add('task-input');
    div.appendChild(input);

    const select = document.createElement('select');
    select.setAttribute('id', 'priority-dropdown');
    div.appendChild(select);

    const option1 = document.createElement('option')
    option1.setAttribute('value', '');
    option1.textContent = 'Choose Priority';
    select.appendChild(option1);

    const option2 = document.createElement('option')
    option2.setAttribute('value', 'Low');
    option2.textContent = 'Low';
    select.appendChild(option2);

    const option3 = document.createElement('option')
    option3.setAttribute('value', 'Medium');
    option3.textContent = 'Medium';
    select.appendChild(option3);

    const option4 = document.createElement('option')
    option4.setAttribute('value', 'High');
    option4.textContent = 'High';
    select.appendChild(option4);

    div.appendChild(schedule());
    div.appendChild(submitTaskButton());
    div.appendChild(cancelTaskButton());

    return div;
}

function schedule() {
    const div = document.createElement('div');
    div.classList.add('schedule');

    const input = document.createElement('input');
    input.setAttribute('type', 'date');
    div.appendChild(input);

    return div;
}

function submitTaskButton() {
    const div = document.createElement('div');
    div.classList.add('submit-task')

    const button = document.createElement('button');
    button.classList.add('submit-task-button')
    button.setAttribute('type', 'submit');
    button.textContent = 'Submit';
    div.appendChild(button);

    return div;
}

function cancelTaskButton() {
    const div = document.createElement('div');
    div.classList.add('cancel-task')

    const button = document.createElement('button');
    button.setAttribute('id', 'cancel-task-button');
    button.textContent = 'Cancel';
    div.appendChild(button);

    return div;
}


function createTaskContainer(input, priority, date) {
    const taskDiv = document.querySelector('.task-div');

    const container = document.createElement('div');
    container.classList.add('task-input-container');
    taskDiv.appendChild(container);
        
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');
    container.appendChild(cardContainer);

    const defaultDiv = document.createElement('div');
    defaultDiv.classList.add('default-div');
    cardContainer.appendChild(defaultDiv);
    
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    defaultDiv.appendChild(checkbox);

    const inputDiv = document.createElement('div');
    inputDiv.textContent = input;
    inputDiv.classList.add('input-div');
    defaultDiv.appendChild(inputDiv);

    const dateDiv = document.createElement('div');
    dateDiv.textContent = date;
    dateDiv.classList.add('date-div');
    defaultDiv.appendChild(dateDiv);

    const extendBtn = document.createElement('button');
    extendBtn.classList.add('extend-button');
    extendBtn.textContent = 'extend';
    defaultDiv.appendChild(extendBtn);

    defaultDiv.appendChild(deleteTaskButton());

    const extendDiv = document.createElement('div');
    extendDiv.classList.add('extend-div', 'none');
    cardContainer.appendChild(extendDiv);
    
    const extendContent = document.createElement('div');
    // extendContent.classList.add('extend-content', 'none');
    extendContent.textContent = 'asdadasds';
    extendDiv.appendChild(extendContent);

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-button');
    editBtn.textContent = 'edit';
    extendDiv.appendChild(editBtn);

    const prio = document.createElement('div');
    prio.textContent = priority;
    prio.classList.add('prio')
    extendDiv.appendChild(prio);


    priorityColor(priority, cardContainer);
}

function priorityColor(priority, cardContainer) {
    if ( priority === 'Low') {
        cardContainer.classList.add('low');
    } else if (priority === 'Medium') {
        cardContainer.classList.add('medium');
    } else if (priority === 'High') {
        cardContainer.classList.add('high');
    } else {
        cardContainer.style.backgroundColor = 'gray';   
    }
}
function deleteTaskButton() {
    const button = document.createElement('button');
    button.textContent = 'del';
    button.classList.add('delete-task-button');
    
    return button;
}

function formOnClick() {
    const form = document.createElement('form');
    form.classList.add('content-form')

    const input = document.createElement('input');
    input.classList.add('content-input');
    form.appendChild(input);

    return form;
}