export { task };

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
    button.classList.add('addTask');    
    button.textContent = 'Add Task';
    div.appendChild(button);

    const img = document.createElement('img');
    div.appendChild(img);

    return div;
}