// var wins;
// var guessTotal;
// var guessedLetters;

// var winsText;
// var guessesLeft;
// var lettersGuessed;

// var currentWord;

// var guessWord;

// var emptySpace;


    var newTextContent = "";

    var wordBank = ["burger", "jimmypesto", "kuchikopi", "wagstaff", "teddy", "mort", "frond", "andy", "ollie", "tina", "louise", "gene", "bob", "linda", "belcher", "jimmyjr"];

    var wins = 0; 
    var guessTotal = 15;
    var guessedLetters = "";

    var wordLength = 0;

    var winsText = document.getElementById("wins-text");
    var guessesLeft = document.getElementById("guesses-left-text");
    var lettersGuessed = document.getElementById("letters-guessed-text")

    var currentWord = document.getElementById("guess-word-text")

    var guessWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(guessWord);

    for (var i =0; i < guessWord.length; i++) {
        var emptySpace = document.createElement("span");
        emptySpace.textContent = "_ ";
        newTextContent += "_";

        currentWord.appendChild(emptySpace);
        }


function gameRestart() {

    newTextContent = "";

    wordLength = 0;

    guessTotal = 15;
    guessedLetters = "";

    winsText = document.getElementById("wins-text");
    guessesLeft = document.getElementById("guesses-left-text");
    lettersGuessed = document.getElementById("letters-guessed-text");

    currentWord = document.getElementById("guess-word-text")

    guessWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(guessWord);

    for (var i =0; i < guessWord.length; i++) {
        var emptySpace = document.createElement("span");
        emptySpace.textContent = "_ ";
        newTextContent += "_";

        currentWord.appendChild(emptySpace);
    }
}



document.onkeyup = function(event) {


    winsText.textContent = "Wins: " + wins;

    var userGuess = event.key;
    var userChoseALetterThatWasInTheWord = false;

   // hello
   // _____
   // guess l
   // __ll_

   // guess o
   // __llo

    //if letter pressed is in code run this one and if not run this code

    var updatedNewUserText = "";
    for (var j = 0; j < guessWord.length; j++) {
        if (guessWord[j] === userGuess) {
            console.log("correct letter");
            console.log("You guessed " + userGuess);
            updatedNewUserText += userGuess;
            // newTextContent[j] = userGuess;
            var userChoseALetterThatWasInTheWord = true;
            wordLength = wordLength + 1;
        } else {
            updatedNewUserText += newTextContent[j];
        }
    }

    newTextContent = updatedNewUserText;
    currentWord.textContent = newTextContent;

    // var space = document.createElement("span");
    //     space.updatedNewTextContent = "_ ";
    //     updatedNewTextContent += "_";

    //     currentWord.appendChild(space);


    if (!userChoseALetterThatWasInTheWord) {
        console.log("incorrect letter");
        guessTotal = guessTotal - 1;
        lettersGuessed.append(userGuess + " ");
      }

    if (guessTotal === 0) {
        alert("Game over. Word was " + guessWord);
        guessesLeft.textContent = " ";
        lettersGuessed.textContent = " ";
        currentWord.textContent = " ";

        gameRestart();
    }

    if (wordLength === guessWord.length) {
        alert("You won! Word was " + guessWord);
        guessesLeft.textContent = " ";
        lettersGuessed.textContent = " ";
        currentWord.textContent = " ";

        wins = wins + 1;

        gameRestart();
    }

    guessesLeft.textContent = "Guesses Left: " + guessTotal;

}