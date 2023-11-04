export { sidebar };

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

    return projectsDiv;
}

function createNewProject() {
    const newProjectDiv = document.createElement('div');

    const button = document.createElement('button');
    button.textContent = 'Create New Project';
    newProjectDiv.appendChild(button);

    const img = document.createElement('img');
    newProjectDiv.appendChild(img);

    return newProjectDiv;
}