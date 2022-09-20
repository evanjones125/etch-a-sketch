// create 16x16 grid of square divs
const grid = document.querySelector('#grid');

for (let i = 0; i < 256; i++) {
    const test = document.createElement('div');
    test.textContent = `test ${i + 1}`;
    test.classList.add(`${i + 1}`);
    grid.appendChild(test);
}