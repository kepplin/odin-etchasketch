# odin-etchasketch

## See the live demo 👇

https://kepplin.github.io/odin-etchasketch/

![demoetch](https://user-images.githubusercontent.com/107027281/211229422-e5e030a3-e187-4e65-bcd0-21aa649d0a68.png)

## About

This was a project for [The Odin Project](https://www.theodinproject.com/lessons/foundations-etch-a-sketch). It was fun to make though I was frustrated because it felt like the only way to make this was to use CSS grid, which at that point in the project, we had not learned about. However this doubled as an opportunity for me to learn more and get ahead.

## Instructions

- Hover over drawing panel to draw.

- Set size of drawing panel through the slide under it.

- Set color through the color picker under the drawing panel.

- Clear the board through pressing the clear button.

## How it Works

1. When the user slides the slider, its value is taken. The function createBoard(this.value) is called.
2. Within createBoard, empty divs are created. board.style.gridTemplate = `repeat(${size}, 1fr) / repeat(${size}, 1fr)`; Creates a grid using the value of the slider.
3. For changing the color of the grid, a for loop is used. Whenever the mouse hovers over a grid div, its background color changes to the color selected by the user (through colorWheel.value).
4. All the clear button does is select the divs within the board and change their background color to white.

## Features?
I will revisit this project in the future to add some features such as:

- a random colour mode

- black and white only mode

- toggle grid lines, 

- the ability to save and export images

- color grabber
