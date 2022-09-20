//establish connection between css size variable and js file
let root = document.querySelector(':root');
let x = getComputedStyle(root);
let y = x.getPropertyValue('--size');

// create initial 16x16 grid of square divs
const grid = document.querySelector('#grid');
for (let i = 0; i < 256; i++) {
    const test = document.createElement('div');
    test.classList.add(`${i + 1}`);
    grid.appendChild(test);
}

// create new grid when button is clicked
number.addEventListener('click', function () {
    // reset current grid
    grid.innerHTML = '';

    // get new grid size from user
    const size = prompt('enter grid size:');

    // set css size variable equal to user input
    // to display correct number of columns
    root.style.setProperty('--size', `${size}`);

    // add new grid squares to the grid
    for (let i = 0; i < size * size; i++) {
        const test = document.createElement('div');
        test.classList.add(`${i + 1}`);
        grid.appendChild(test);
    }
});

// change individual square's background color when hovered over
grid.addEventListener('mouseover', function (e) {
    e.target.style.background = 'blue';
});