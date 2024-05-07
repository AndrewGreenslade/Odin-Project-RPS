//get a random state for the player using the function getRandomState(), which can be either rock, paper, or scissors
let state = getRandomState();

//print the state to the console
console.log("I play: " + state);

//Returns a random int from 0 - to specified max
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//gets a random state for the player, which is either rock, paper, or scissors
function getRandomState() {

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