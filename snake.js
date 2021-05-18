import {getInputDirection} from './input.js'

let newSegments = 0;

export const SNAKE_SPEED = 2;
const snakeBody = [
    {x: 10, y: 11},

];

export function update() {
    addSegments();
    const inputDirection = getInputDirection();
    for (let i = snakeBody.length - 2; i >= 0; i--){
        snakeBody[i+1] = { ...snakeBody[i] }
    }    

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.x;
        snakeElement.style.gridColumnStart = segment.y;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    })
}

export function expandSnake(amount) {
    newSegment += amount
}

export function onSnake(position, { ignoreHead = false} = {} ) {
    return snakeBody.some(segment => {
        if (ignoreHead && index == 0) return false;
        return equalPositions(segment, position)
    })
}


export function snakeIntersection() {
    return onSnake(snakeBody[0], {ignoreHead: true})
}


export function getSnakeHead(position) {
    return snakeBody[0];
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() {
    for (let i = 0; i < newSegment; i++) {
        snakeBody.push( {...snakeBody[snakeBody.length - 1] })
    }

    newSegment = 0;
}