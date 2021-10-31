function makeBoxes() {
    
    const grid = document.createElement('div');
    grid.id = 'theGrid';
    grid.classList.add('theGrid');
    const parentDiv = document.getElementById('gridContainer');
    const sliderVal = document.getElementById('sizeBySize');
    const gridSize = sliderVal.value;
    const boxWidth = 100 / gridSize;
    const colOBoxes = document.createElement('div');
    colOBoxes.id = 'colOBoxes';
    colOBoxes.style.width = `${boxWidth}%`;
    let i = 0;
    while (i < gridSize) {
        const box = document.createElement('div');
        box.id = 'aBox';
        box.classList.add('aBox');
        box.style.width = `100%`;
        box.style.height = `${boxWidth}%`;
        colOBoxes.appendChild(box);
        i++;
        console.log(sliderVal.value);
        grid.appendChild(colOBoxes);
    };
    i = 1;
    while (i < gridSize) {
        const colClone = colOBoxes.cloneNode([true]);
        grid.appendChild(colClone);
        i++;
    };
    const sizeSlider = document.getElementById('sizeInput');
    parentDiv.insertBefore(grid, sizeSlider);
    colorBoxes();
};

function getRandColor() {
    const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple'];
    rainIndex = Math.floor(Math.random() * 7);
    return(rainbow[rainIndex]);
}


function colorBoxes() {
    let boxes = document.querySelectorAll('.aBox');
    let boxColor = 'black';
    let constantColor = true;
    console.log(document.querySelector('input[name="selector"]:checked').id)
    if (document.querySelector('input[name="selector"]:checked').id === 'marker'){
        boxColor = document.getElementById('colorPicker').value;
    } else if (document.querySelector('input[name="selector"]:checked').id === 'eraser'){
        boxColor = 'white';
    } else if (document.querySelector('input[name="selector"]:checked').id === 'randBow'){
        constantColor = false;
    };
    if (constantColor) {boxes.forEach(box => {
        box.addEventListener('mouseenter', () =>
        box.style.background=boxColor);
    });} else {
        boxes.forEach(box => {
            box.addEventListener('mouseenter', () =>
            box.style.background=getRandColor());
        });
    }
}

function removeBoxes() {
    const grid = document.getElementById('theGrid');
    grid.remove();
    makeBoxes();
};

function updateLayout() {
    const layoutDisp = document.getElementById('gridLayout');
    const sliderVal = document.getElementById('sizeBySize');
    const display = `Grid Layout: ${sliderVal.value} x ${sliderVal.value}`;
    layoutDisp.textContent = display;
};

const slider = document.getElementById('sizeBySize');
slider.addEventListener("change", removeBoxes);

const clearButt = document.querySelector('#clearer');
clearButt.addEventListener('click', removeBoxes);

const colorButt = document.querySelector('#colorPicker');
colorButt.addEventListener('change', colorBoxes);

const radButts = document.querySelectorAll('.selector');
radButts.forEach(radButt => {
    radButt.addEventListener('click', colorBoxes);
});

let rainIndex = 0;
makeBoxes();
updateLayout();