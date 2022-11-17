// Size of Grid
const slider = document.querySelector('.slider');
const value = document.querySelector('.value');
const colorWheel = document.querySelector('.colorWheel');
const clearButton = document.querySelector('.clearButton');
const board = document.querySelector('.board');

value.textContent = `${slider.value} x ${slider.value}`;

slider.oninput = function(){
    value.textContent = `${this.value} x ${this.value}`;
    createBoard(this.value);
}

function createBoard(size){
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplate = `repeat(${size}, 1fr) / repeat(${size}, 1fr)`;
    let area = size * size

    for(let i = 0; i < area; i++){
        let square = document.createElement('div');
        square.onmouseover = function(){
            square.style.cssText = `background: ${colorWheel.value}`;
        }
        board.insertAdjacentElement('beforeend', square);
    }
}

clearButton.onclick = function () {
    var gridPixels = board.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.style.backgroundColor = '#ffffff');
}

createBoard(16);
