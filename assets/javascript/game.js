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

    var wordBank = ["burger", "jimmypesto", "kuchikopi", "wagstaff", "teddy", "mort", "frond"];

    //var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var wins = 0; 
    var guessTotal = 15;
    var guessedLetters = "";

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

    //if (guessWord.includes(event.key) & guessWord[j] === event.key)

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
            //var replace = str.replace("_", userGuess);
            //document.getElementById("")
            // emptySpace.textContent = userGuess;
            //guessWord[j].innerHTML = userGuess;
            //lettersGuessed.innerHTML = userGuess;

            // var str = document.getElementById("demo").innerHTML; 
            // var res = str.replace("Microsoft", "W3Schools");
            // document.getElementById("demo").innerHTML = res;
        } else {
            updatedNewUserText += newTextContent[j];
        }
    }

    newTextContent = updatedNewUserText;
    currentWord.textContent = newTextContent;

    var emptySpace = document.createElement("span");
        emptySpace.newTextContent = "_ ";
        newTextContent += "_";

        currentWord.appendChild(emptySpace);


    if (!userChoseALetterThatWasInTheWord) {
        console.log("incorrect letter");
        guessTotal = guessTotal - 1;
        lettersGuessed.append(userGuess + " ");
      }

    if (guessTotal === 0) {
        alert("Game over");
        guessesLeft.textContent = " ";
        lettersGuessed.textContent = " ";
        currentWord.textContent = " ";

        gameRestart();
    }

    guessesLeft.textContent = "Guesses Left: " + guessTotal;

}