// Get the elements you'll need from your HTML -Completed-

const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");

const startGame = document.getElementsByClassName("btn__reset");
const overlay = document.getElementById("overlay");

const missed = 0; // if the player guesses wrong 5 times, they lose the game

// Create an array named phrases. -Completed-
const phrases = [
  "I",
  "Solemnly",
  "Swear",
  "that",
  "I",
  "am",
  "up",
  "to",
  "no",
  "good",
];

// Loop Through an Array
// function createListItems(arr) {
//   let items = "";
//   for (let i = 0; i < arr.length; i++) {
//     items += ``;
//   }
// }
// Attach a event listener to the "Start Game" button to hide the start screen overlay
function y() {
  startGame.addEventListener("click", () => {
    if (overlay.style.display == "block") {
      overlay.style.display = "none";
    }
  });
}

// Create a getRandomPhraseAsArray function
// incomplete
function getRandomPhraseAsArray(phrases) {
  const randomNumber = phrases.length;
  randomNumber[0];
  return randomNumber;
}

// Set the game display
const addPhraseToDisplay = (arr) => {};

// Create a checkLetter function
const checkLetter = (button) => {
  const li = getElementsByTagName("li");
  const matchFound = "";
  //loop through all of the li elements. Remember: arrays start with index 0!
  for (let i = 0; i < li.length; i++) {
    // Create a conditional that compares the text of the button to li
    if (button == matchFound) {
      // if they match, add the "show" class to the li
    } else {
    }
  }
  return matchFound;
};

// Add an event Listener to the keyboard
qwerty.addEventListener("click", (e) => {});
// Count the missed guesses in the game

// Create a checkWin function
// const checkWin = () => {};
