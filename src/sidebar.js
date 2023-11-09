export { sidebar, createNewProject, createProjectContainer};


function sidebar() {
    
    const content = document.createElement('div');
    content.classList.add('sidebar-container');
    
    content.appendChild(createSideOptions());
    content.appendChild(projects());

    return content;
}

function createSideOptions() {
    const array = ['inbox', 'today', 'upcoming'];

    const insideDiv = document.createElement('div');
    insideDiv.classList.add('created-content');
    
    array.forEach( e => {
        const upperCapital = e.toLowerCase().charAt(0).toUpperCase() + e.slice(1)
        const lowerCase = e.toLowerCase();

        const div = document.createElement('div');
    
        const img = document.createElement('img');
        div.appendChild(img);
    
        const button = document.createElement('button');
        button.textContent = upperCapital;
        button.classList.add(lowerCase);
        div.appendChild(button);
    
        insideDiv.appendChild(div);
    })

    return insideDiv;
}

function projects() {

    const projectsDiv = document.createElement('div');
    projectsDiv.classList.add('projects');
    
    const img = document.createElement('img');
    img.classList.add('projects-img');
    projectsDiv.appendChild(img);

    const div = document.createElement('div');
    div.textContent = 'PROJECTS';
    div.classList.add('projects');
    projectsDiv.appendChild(div);

    projectsDiv.appendChild(createNewProject());
    projectsDiv.appendChild(projectForm());

    return projectsDiv;
}

function createNewProject() {
    const newProjectDiv = document.createElement('div');
    newProjectDiv.classList.add('project-container')

    const img = document.createElement('img');
    img.classList.add('project-img');
    newProjectDiv.appendChild(img);
    
    const button = document.createElement('button');
    button.textContent = 'Create New Project';
    button.classList.add('projectBtn')
    button.setAttribute('id', 'projectBtn');
    newProjectDiv.appendChild(button);


    newProjectDiv.appendChild(createProjectList());

    return newProjectDiv;
}

function createProjectList() {
    const projectList = document.createElement('div');
    projectList.classList.add('project-list');
    projectList.setAttribute('id', 'project-list');

    return projectList;
}

function projectForm() {
    const formContainer = document.createElement('div');
    formContainer.setAttribute('id', 'form-container');

    const form = document.createElement('form');
    form.classList.add('project-form');
    form.classList.add('none');
    formContainer.appendChild(form);

    const input = document.createElement('input');
    input.setAttribute('placeholder', 'Project Name');
    input.setAttribute('id', 'project-input');
    form.appendChild(input);

    const div = document.createElement('div');
    div.classList.add('button-container');
    form.appendChild(div);

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'cancel'
    cancelBtn.setAttribute('id', 'cancelBtn');
    div.appendChild(cancelBtn);
    
    const addBtn = document.createElement('button');
    addBtn.textContent = 'add';
    addBtn.classList.add('addBtn');
    addBtn.setAttribute('type', 'submit');
    div.appendChild(addBtn);

    return formContainer;
} 

function createProjectContainer(input) {
    const formContainer = document.getElementById('form-container');

    const container = document.createElement('div');
    container.classList.add('input-container');
    container.setAttribute('id', input);
    formContainer.appendChild(container);
    
    const img = document.createElement('img');
    container.appendChild(img)

    const div = document.createElement('div');
    div.textContent = input;
    container.appendChild(div)
    

    const button = document.createElement('button');
    button.textContent = 'del';
    button.classList.add('project-delete-button');
    container.appendChild(button);

}