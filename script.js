//store human and computer scores
var humanScore = 0;
var computerScore = 0;
var turns = 0;

//starts the game
playRound();

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

function getHumanChoice() {
    //get the human choice from the user
    let choice = prompt("Please enter your choice (rock, paper, or scissors):");

    if (choice === null) {
        return null;
    }

    choice = choice.toLowerCase();

    //check if the choice is valid
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        console.log("Invalid choice. Please enter rock, paper, or scissors.");
        return getHumanChoice();
    }
}

//plays the first round of rock paper scissors out of 5 rounds
function playRound() {
    turns++;

    if (turns <= 5) {

        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        if (humanSelection === null) {
            return;
        }

        //check if the human and computer choices are the same
        if (humanSelection === computerSelection) {
            console.log("It's a tie! You both chose " + humanSelection);
            playRound();
            return;
        }

        switch (humanSelection) {
            case "rock":
                if (computerSelection === "scissors") {
                    playerWins(humanSelection, computerSelection);
                }
                else {
                    computerWins(humanSelection, computerSelection);
                }
                break;
            case "paper":
                if (computerSelection === "rock") {
                    playerWins(humanSelection, computerSelection);
                }
                else {
                    computerWins(humanSelection, computerSelection);
                }
                break;
            case "scissors":
                if (computerSelection === "paper") {
                    playerWins(humanSelection, computerSelection);
                }
                else {
                    computerWins(humanSelection, computerSelection);
                }
                break;
        }

        playRound();
    }
    else {
        console.log("Game Over! Your score: " + humanScore + " Computer score: " + computerScore);
    }
}

//function to increment the human score
function playerWins(humanSelection, computerSelection) {
    humanScore++;
    console.log("You win! " + humanSelection + " beats " + computerSelection);
}

//function to increment the computer score
function computerWins(humanSelection, computerSelection) {
    computerScore++;
    console.log("You lose! " + computerSelection + " beats " + humanSelection);
}