export {getProjectInput, getTaskInput} ;

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

