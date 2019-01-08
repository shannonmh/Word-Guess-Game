// var newTextContent = "";

// var wordBank = ["burger", "jimmypesto", "kuchikopi", "wagstaff", "teddy", "mort", "frond", "andy", "ollie", "tina", "louise", "gene", "bob", "linda", "belcher", "jimmyjr"];

// var wins = 0;
// var guessTotal = 15;
// var guessedLetters = "";

// var wordLength = 0;

// var winsText = document.getElementById("wins-text");
// var guessesLeft = document.getElementById("guesses-left-text");
// var lettersGuessed = document.getElementById("letters-guessed-text")

// var currentWord = document.getElementById("guess-word-text");
// var emptySpace = ""

// var wordArray = [];
// var gameGoing = false;
// var uderscoreWord;

// var guessWord = wordBank[Math.floor(Math.random() * wordBank.length)];
// console.log(guessWord);

// var createWord = function () {
//     wordArray = guessWord.split("");
//     console.log(wordArray);

//     for (var i = 0; i < wordArray.length; i++) {
//         wordArray[i] = '_ ';


//         //var emptySpace = document.createElement("span");
//         //emptySpace = emptySpace + "_ ";
//         //newTextContent += "_";
//         //console.log(emptySpace + "emptySpace");

//         // newTextContent += "_ ";

//         //currentWord.innerText = emptySpace;
//         // wordArray.push("_ ");

//         //wordArray = currentWord;
//     };
//     wordArray.join(" ");
//     console.log(wordArray);
//     underscoreWord = wordArray.join(" ");
//     console.log(underscoreWord);

//     currentWord.textContent = underscoreWord;
// }


// function gameRestart() {

//     newTextContent = "";

//     wordLength = 0;

//     guessTotal = 15;
//     guessedLetters = "";

//     winsText = document.getElementById("wins-text");
//     guessesLeft = document.getElementById("guesses-left-text");
//     lettersGuessed = document.getElementById("letters-guessed-text");

//     currentWord = document.getElementById("guess-word-text")

//     guessWord = wordBank[Math.floor(Math.random() * wordBank.length)];
//     console.log(guessWord);

//     for (var i = 0; i < guessWord.length; i++) {
//         var emptySpace = document.createElement("span");
//         emptySpace.textContent = "_ ";
//         newTextContent += "_";
//         // newTextContent += "_ ";

//         currentWord.appendChild(emptySpace);
//     }
// }



// document.onkeyup = function (event) {

//     if (gameGoing === false) {
//         createWord();
//         gameGoing = true;
//     } else {
//         winsText.textContent = "Wins: " + wins;

//         var userGuess = event.key;
//         var userChoseALetterThatWasInTheWord = false;

//         //if letter pressed is in code run this one and if not run this code

//         //var updatedNewUserText = "";
//         for (var j = 0; j < guessWord.length; j++) {
//             if (guessWord[j] === userGuess) {
//                 console.log("correct letter");
//                 console.log("You guessed " + userGuess);
//                 //updatedNewUserText += userGuess;
//                 // newTextContent[j] = userGuess;
//                 //var userChoseALetterThatWasInTheWord = true;
//                 //wordLength = wordLength + 1;
//                 //console.log(updatedNewUserText);
//                 guessWord[j] = wordArray;
//             } else {
//                 //updatedNewUserText += newTextContent[j];
//             }
//         }

//         //newTextContent = updatedNewUserText;
//         //currentWord.textContent = newTextContent;

//         // var space = document.createElement("span");
//         //     space.updatedNewTextContent = "_ ";
//         //     updatedNewTextContent += "_";

//         //     currentWord.appendChild(space);


//         if (!userChoseALetterThatWasInTheWord) {
//             console.log("incorrect letter");
//             guessTotal = guessTotal - 1;
//             lettersGuessed.append(userGuess + " ");
//         }

//         if (guessTotal === 0) {
//             alert("Game over. Word was " + guessWord);
//             guessesLeft.textContent = " ";
//             lettersGuessed.textContent = " ";
//             currentWord.textContent = " ";

//             gameRestart();
//         }

//         if (wordLength === guessWord.length) {
//             alert("You won! Word was " + guessWord);
//             guessesLeft.textContent = " ";
//             lettersGuessed.textContent = " ";
//             currentWord.textContent = " ";

//             wins = wins + 1;

//             gameRestart();
//         }
//     }

//     guessesLeft.textContent = "Guesses Left: " + guessTotal;

// }

var newTextContent = "";

var wordBank = ["burger", "jimmypesto", "kuchikopi", "wagstaff", "teddy", "mort", "frond", "andy", "ollie", "tina", "louise", "gene", "bob", "linda", "belcher", "jimmyjr"];

var wins = 0;
var guessTotal = 15;
var guessedLetters = "";

var wordLength = 0;

var winsText = document.getElementById("wins-text");
var guessesLeft = document.getElementById("guesses-left-text");
var lettersGuessed = document.getElementById("letters-guessed-text");
var numberLetters = document.getElementById("number-in-word");

var currentWord = document.getElementById("guess-word-text");

var guessWord = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(guessWord);

for (var i = 0; i < guessWord.length; i++) {
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
    numberLetters = document.getElementById("number-in-word");

    currentWord = document.getElementById("guess-word-text");

    guessWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(guessWord);

    for (var i = 0; i < guessWord.length; i++) {
        var emptySpace = document.createElement("span");
        emptySpace.textContent = "_ ";
        newTextContent += "_";

        currentWord.appendChild(emptySpace);
    }
}



document.onkeyup = function (event) {


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
    console.log(guessWord.length);
    numberLetters.textContent = "Number of letters in the current word: " + guessWord.length;

}