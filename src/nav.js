export { nav, collapseBtn};


function nav() {
    const content = document.createElement('div');
    content.classList.add('nav-container');

    content.appendChild(leftNav());
    content.appendChild(rightNav());

    return content;
}

function leftNav() {
    const div = document.createElement('div');
    div.classList.add('left-nav');

    div.appendChild(heroName());
    div.appendChild(buttons());

    return div;
}

function heroName() {
    const div = document.createElement('div');
    div.classList.add('hero-cell');
    div.textContent = 'ToDo App';
    return div;
}

function buttons() {
    const div = document.createElement('div');
    div.classList.add('buttons-cell');

    div.appendChild(collapseBtn());
    div.appendChild(homeBtn());
    div.appendChild(searchInput());

    return div;
}
    
function collapseBtn() {
    const button = document.createElement('button');
    button.classList.add('collapseBtn');
    button.textContent = 'coll';  

    return button;
}

function homeBtn() {
    const button = document.createElement('button');
    button.classList.add('home');
    button.textContent = 'home';
    return button;
}

function searchInput() {
    const input = document.createElement('input');
    input.classList.add('input');
    input.setAttribute('for', 'search')
    return input;
}

function rightNav() {
    const div = document.createElement('div');
    div.classList.add('right-nav');

    div.appendChild(low());
    div.appendChild(medium());
    div.appendChild(high());

    return div;
}

function low() {
    const div = document.createElement('div');
    div.classList.add('low');
    div.textContent = 'Low';
    return div;
}

function medium() {
    const div = document.createElement('div');
    div.classList.add('medium');
    div.textContent = 'Medium';
    return div;
}
function high() {
    const div = document.createElement('div');
    div.classList.add('high');
    div.textContent = 'High';
    return div;
}