// Get the elements you'll need from your HTML

const keyrow = document.getElementsByClassName(".keyrow");
const button = document.getElementsByTagName("button");

const phrase = document.querySelector("#phrase ul");
const liveHeart = document.querySelectorAll("IMG");
const startGame = document.getElementsByClassName("btn__reset");
const overlay = document.getElementById("overlay");

const tries = document.querySelector("#scoreboard .tries");

let missed = 0; // if the player guesses wrong 5 times, they lose the game

// Create an array named phrases.
// Complete
const phrases = [
  "my name is jeff",
  "fresh prince of bel air",
  "the sky is the limit",
  "to kill a mockingbird",
  "just do it",
];

// Attach a event listener to the "Start Game" button to hide the start screen overlay
// Complete
startGame[0].addEventListener("click", () => {
  overlay.style.display = "none";
});

// Create a getRandomPhraseAsArray function
// complete
const getRandomPhraseAsArray = (arr) => {
  const randomArr = arr[Math.floor(Math.random() * arr.length)];
  return randomArr.split("");
};

// Set the game display
// complete
const addPhraseToDisplay = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const li = document.createElement("li");
    phrase.appendChild(li);
    li.textContent = arr[i];
    if (arr[i] !== " ") {
      li.className = "letter";
    } else {
      li.className = "space";
    }
  }
};
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

// Create a checkLetter function
// complete
const checkLetter = (button) => {
  const letter = document.getElementsByClassName("letter");

  let matchFound = null;
  //loop through all of the li elements. Remember: arrays start with index 0!
  for (let i = 0; i < letter.length; i += 1) {
    // Create a conditional that compares the text of the button to li

    if (letter[i].textContent == button) {
      // if they match, add the "show" class to the li
      matchFound = letter[i].textContent;
      letter[i].classList.add("show");
    }
  }

  if (matchFound === null) {
    liveHeart[missed].setAttribute("src", "images/lostHeart.png");
    missed++;
  }

  console.log(liveHeart);
  return matchFound;
};

// Add an event Listener to the keyboard
// incomplete
for (let i = 0; i < button.length; i += 1) {
  button[i].addEventListener("click", (e) => {
    button[i].disabled = true;
    button[i].className = "chosen";
    checkLetter(button[i].textContent);
  });

  const liLetter = querySelector(".letter");
  const liShow = querySelector(".show");
}

// Count the missed guesses in the game

// Create a checkWin function
// incomplete
const checkWin = () => {
  const liLetter = querySelector(".letter");
  const liShow = querySelector(".show");
  /*
   * Check if the length of the 2 variables are the same. If they are,
   * display the win overlay
   */
  if (liLetter.length == liShow.length) {
    // Create the win overlay by adding the "win" class to the start overlay

    overlay.className = "win";
    // Change the headline text of the start overlay to show a person won.

    // Change the display property of the overlay to "flex"
  }
  if (missed > 4) {
    /*
     * Check if the missed counter is greater than 4. If they are,
     * display the lose overlay
     */

    // Create the lose overlay by adding the "lose" class to the start overlay
    overlay.className = "lose";
    // Change the headline text of the start overlay to show a person lost.

    // Change the display property of the overlay to "flex"
  }
};
