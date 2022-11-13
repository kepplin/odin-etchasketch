const slider = document.querySelector('.slider');
const value = document.querySelector('.value');
value.textContent = `${slider.value} x ${slider.value}`;
slider.oninput = function(){
    value.textContent = `${this.value} x ${this.value}`;
}


function createBoard(size){
let board = document.querySelector('.board');
let squares = board.querySelectorAll('div');
squares.forEach((div) => div.remove());
board.style.gridTemplate = `repeat(${size}, 1fr) / repeat(${size}, 1fr)`;
let area = size * size

for(let i = 0; i < area; i++){
    let square = document.createElement('div');
    square.style.cssText = 'background: blue';
    board.insertAdjacentElement('beforeend', square);
}
}

createBoard(16);