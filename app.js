// Get the elements you'll need from your HTML

const qwerty = document.getElementById("qwerty");
const keyrow = document.getElementsByClassName("keyrow");
const button = document.getElementsByTagName("button");
const phrase = document.getElementById("phrase");

const startGame = document.getElementsByClassName("btn__reset");
const overlay = document.getElementById("overlay");

const missed = 0; // if the player guesses wrong 5 times, they lose the game

// Create an array named phrases.
// Complete
const phrases = [
  "My Name Is Jeff",
  "Fresh Prince of Bel Air",
  "The Sky Is The Limit",
  "To Kill A Mockingbird",
  "Just Do It",
];

// Loop Through an Array
// function createListItems(arr) {
//   let items = "";
//   for (let i = 0; i < arr.length; i++) {
//     items += ``;
//   }
// }

// Attach a event listener to the "Start Game" button to hide the start screen overlay
// Complete
startGame[0].addEventListener("click", () => {
  overlay.style.display = "none";
});

// Create a getRandomPhraseAsArray function
// incomplete
const getRandomPhraseAsArray = (arr) => {
  const randomArr = Math.floor(Math.random() * phrases.length);
  randomArr[0];
  getRandomPhraseAsArray(phrases);
  arr[0];
};

// Set the game display
// incomplete
const addPhraseToDisplay = (arr) => {
  for (let i = 0; i < phrases.length; i++) {
    const li = document.createElement("li");
    phrase.appendChild(phrase.ul);
    if (li == letter) {
      li.className = "letter";
    }
  }
  const phraseArray = getRandomPhraseAsArray(phrases);
  addPhraseToDisplay(phraseArray);
};
// console.log(phrases[0].split(""));
// Create a checkLetter function
// incomplete
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
// incomplete
button[0].addEventListener("click", (e) => {
  button.disabled = true;
  button.className = "chosen";
});

// Count the missed guesses in the game

// Create a checkWin function
// incomplete
const checkWin = () => {
  const liLetter = getElementsByClassName("letter");
  const liShow = getElementsByClassName("show");
  /*
   * Check if the length of the 2 variables are the same. If they are,
   * display the win overlay
   */

  // Create the win overlay by adding the "win" class to the start overlay

  // Change the headline text of the start overlay to show a person won.

  // Change the display property of the overlay to "flex"

  /*
   * Check if the missed counter is greater than 4. If they are,
   * display the lose overlay
   */

  // Create the lose overlay by adding the "lose" class to the start overlay

  // Change the headline text of the start overlay to show a person lost.

  // Change the display property of the overlay to "flex"
};
