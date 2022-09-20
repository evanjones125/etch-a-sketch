// create 16x16 grid of square divs
const grid = document.querySelector('#grid');

for (let i = 0; i < 256; i++) {
    const test = document.createElement('div');
    test.classList.add(`${i + 1}`);
    grid.appendChild(test);
}

// create hover effect
grid.addEventListener('mouseover', function (e) {
    e.target.style.background = 'blue';
});