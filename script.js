/**
 * * Game: Flip It
 *
 * Player has the option of choosing easy, medium, and hard ->
 * Based on the mode player has chosen - a certain amount of cards will display:
 * * Easy - 2x2 = 4
 * * Medium - 4x4 = 16
 * * Hard - 6x6 = 36
 * ! (optional) Challenging - 8x8 = 64
 * and gameboard will be created
 *
 *
 * * All colors will be randomized and shuffled for every round:
 * Max card amount = 64
 * Total color amount = 32 (color pairs)
 * Add an array of colors
 * Access the array
 * Add a shuffle function
 *
 * Actual Game:
 *
 * select all memory cards
 * flip card function ->
 * * when you click a card
 * * it will toggle from front-face to back-face
 * *
 * * if first card is clicked it will start the timeOut
 * * if the timeOut reaches 8 seconds it will flip back
 * * else if second card is clicked
 * * clearTimeout
 * * check if cards match
 *
 * check is cards match:
 * if firstcard.color === secondcard.color {
 *      the card will stay on its front-side
 * } else {
 *      cards will unflip
 * }
 *
 *
 * */

const easyMode = document.getElementById("easy");
const mediumMode = document.getElementById("medium");
const hardMode = document.getElementById("hard");

easyMode.addEventListener("click", () => {
  createGameBoard(2, 2);
});

mediumMode.addEventListener("click", () => {
  createGameBoard(4, 4);
});

hardMode.addEventListener("click", () => {
  createGameBoard(4, 4);
});

// select the .container class which is a descendent of .gameboard
const gameboard = document.querySelector(".gameboard .container");

// create a createGameBoard function with the parameters of row, and column which will determine the number of rows and columns
function createGameBoard(row, column) {
  // Clear the current game board
  gameboard.innerHTML = "";

  // Calculate the total number of cards
  const totalCards = row * column;
  
  // Gotta figure out a way to make an array of colors and shuffle them around for every new game

  // * Setting up the game board grid layout -- responsible for rearranging and adjusting the grid layout of the game based off of chosen mode
  // This is basically saying gameboard will have a grid style for both row and column
  // Depending on the mode player chose the card will repeat until it meets that number amount
  // 1fr means it will take up an equal fraction of that amount of space so for example if the column and row is meant to be 4x4, each card will take up 1/4 of the row and column space
  gameboard.style.gridTemplateColumns = `repeat(${column}, 1fr)`;
  gameboard.style.gridTemplateRows = `repeat(${row}, 1fr)`;

  // * Create a for loop that creates new and inserts new divs based off the mode that was chosen
  // should add a memory card
  // with a front-face and back-face
  // Append the front-face and back-face to the memory-card
  // append the actual card to the gameboard
}

// * a function to get random colors

// * a function to shuffle the colors

// * 


/**
 * 
 * CREDITS & RESOURCES:
 * - https://www.geeksforgeeks.org/javascript-generate-random-hex-codes-color/#
 * - 
 * 
 * 
 */