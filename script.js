let computerPlay = () => {
    const words = ["rock", "paper", "scissors"];
    let num = Math.floor(Math.random() * 3);
    let computerResult = words[num];
    return computerResult
}

const computerSelection = computerPlay();

let playRound = (userSelection, computerSelection) => {

    // This could also be done with switch but I prefer if statements
    if (userSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats Rock"
    } else if (userSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats Scissors"
    } else if (userSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats Paper"
    } else if (userSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock"
    } else if (userSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats Scissors"
    } else if (userSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats Paper"
    } else if (userSelection === "rock" && computerSelection === "rock") {
        return "It's a tie! Rock and Rock"
    } else if (userSelection === "paper" && computerSelection === "paper") {
        return "It's a tie! Paper and Paper"
    } else if (userSelection === "scissors" && computerSelection === "scissors") {
        return "It's a tie! Scissors and Scissors"
    }
}

// grab user input and save to userSelection

let game = () => {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(userSelection, computerSelection))
    }
}