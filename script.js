//required game variables
var humanScore = 0;
var computerScore = 0;
var turns = 0;
var humanSelection = "";

//get the elements from the html
var yourChoice = document.getElementById("yourChoice");
var errorMessage = document.getElementById("Error");
var roundResultsMessage = document.getElementById("roundResults");
var roundCounterDisplay = document.getElementById("roundCounter");


//Returns a random int from 0 - to specified max
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//gets a random state for the AI, which is either rock, paper, or scissors
function getComputerChoice() {

    //get random value from 0 to 2
    let value = getRandomInt(3);

    //return string based on value
    switch (value) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function setHumanChoice(playerChoice) {
    //get the human choice from the user
    let choice = playerChoice.toLowerCase();

    if (choice === null) {
        errorMessage.innerText = "Please Enter a valid choice! Choose rock, paper, or scissors.";
        return;
    }

    //check if the choice is valid
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        humanSelection = choice;
        playRound();
    }
    else {
        errorMessage.innerText = "Invalid choice! Please choose rock, paper, or scissors.";
    }
}

//plays the first round of rock paper scissors out of 5 rounds
function playRound() {

    let computerSelection = getComputerChoice();

    if (turns < 5) {

        //check if the human and computer choices are the same
        if (humanSelection === computerSelection) {
            tieRound();
            turns++;
            roundCounterDisplay.innerText = "Round: " + turns + "/5";
            checkForGameOver();
            return;
        }

        //handles game logic
        switch (humanSelection) {
            case "rock":
                if (computerSelection === "scissors") {
                    playerWinsRound(computerSelection);
                }
                else {
                    computerWinsRound(computerSelection);
                }
                break;
            case "paper":
                if (computerSelection === "rock") {
                    playerWinsRound(computerSelection);
                }
                else {
                    computerWinsRound(computerSelection);
                }
                break;
            case "scissors":
                if (computerSelection === "paper") {
                    playerWinsRound(computerSelection);
                }
                else {
                    computerWinsRound(computerSelection);
                }
                break;
        }
        turns++;
        roundCounterDisplay.innerText = "Round: " + turns + "/5";
        checkForGameOver();
    }
}

//Check for end of game and handle the end of the game logic
function checkForGameOver() {
    if (turns == 5) {
        if (humanScore > computerScore) {
            playerWinsGame();
        }
        else if (humanScore < computerScore) {
            computerWinsGame();
        }
        else {
            itsATie();
        }
    }
}

//function to increment the human score
function playerWinsRound(computerSelection) {
    humanScore++;
    roundResultsMessage.innerText = "You win this round! You chose " + humanSelection + " and the AI chose " + computerSelection + "!";
}

//function to increment the computer score
function computerWinsRound(computerSelection) {
    computerScore++;
    roundResultsMessage.innerText = "You loose this round! You chose " + humanSelection + " and the AI chose " + computerSelection + "!";
}

//function to increment the computer score
function tieRound(computerSelection) {
    roundResultsMessage.innerText = "it's a tie! Try again! You chose " + humanSelection + " and the AI chose " + computerSelection + "!";
}


//Player wins game
function playerWinsGame() {
    roundResultsMessage.innerText = "Game over! You win! Congratulations!" + " You: " + humanScore + " - AI: " + computerScore;
}

//Computer wins game
function computerWinsGame() {
    roundResultsMessage.innerText = "Game over! Better luck next time!" + " You: " + humanScore + " - AI: " + computerScore;
}

//its a tie!
function itsATie() {
    roundResultsMessage.innerText = "Game over! Sorry, It's a tie!" + " You: " + humanScore + " - AI: " + computerScore;
}

//Check for end of game and handle the end of the game logic
function resetGame() {
    turns = 0;
    computerScore = 0;
    humanScore = 0;
    roundResultsMessage.innerText = "Player hasn't chosen yet";
    roundCounterDisplay.innerText = "Round: 0/5";
}