export { task, addTask, taskForm, createTaskContainer };

function task() {
    const content = document.createElement('div');
    content.classList.add('task-container');

    content.appendChild(addTask());

    return content;
}

function addTask() {
    const div = document.createElement('div');
    div.classList.add('task-div');
    
    const button = document.createElement('button');
    button.classList.add('taskBtn');    
    button.textContent = 'Add Task';
    div.appendChild(button);
    
    const img = document.createElement('img');
    div.appendChild(img);
    
    return div;
}

function taskForm() {
    const taskDiv = document.querySelector('.task-div');

    const form = document.createElement('form');
    form.classList.add('task-form');
    taskDiv.appendChild(form);

    form.appendChild(prioritySelection());
    form.appendChild(schedule());
    form.appendChild(submitTaskButton());
    form.appendChild(cancelTaskButton());
    
}

function prioritySelection() {
    const div = document.createElement('div');
    div.classList.add('priority');

    const input = document.createElement('input');
    input.classList.add('task-input');
    div.appendChild(input);

    const select = document.createElement('select');
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


function createTaskContainer(input) {
    const taskContainer = document.querySelector('.task-container');

    const container = document.createElement('div');
    container.classList.add('task-input-container');
    taskContainer.appendChild(container);

    const div = document.createElement('div');
    div.textContent = input;
    container.appendChild(div)

}