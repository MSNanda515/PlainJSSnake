import { SNAKE_SPEED, update as updateSnake, draw as drawSnake, onSnake, 
getSnakeHead, snakeIntersection } from './snake.js';

import {outsideGrid} from './grid.js'

import {update as updateFood, draw as drawFood} from './food.js'

let lastRenderTime = 0
const gameBoard = document.getElementById('game-board')
let gameOver = false;


function main(currentTime) {
    if (gameOver) {
        if (confirm("You lost. Press ok to restart"))
            window.location = '/'
        return 
    }
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED)
        return;
    console.log('Render');
    window.requestAnimationFrame(main);
    lastRenderTime = currentTime;

    update();
    draw();
}

window.requestAnimationFrame(main);

function update() {
    updateSnake();
    updateFood();
    checkDeath()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}
