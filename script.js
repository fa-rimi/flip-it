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

// create gameboard function -- that changes based off of game mode (rearranges rows and columns)
const gameboard = document.querySelector(".gameboard .container");
function createGameBoard(row, column) {
  // Clear the current game board
  gameboard.innerHTML = "";

  // Calculate the total number of cards
  const totalCards = row * column;
}
