let computerPlay = () => {
    const words = ["Rock", "Paper", "Scissors"];
    let num = Math.floor(Math.random() * 3);
    let computerResult = words[num];
    return computerResult
    // console.log(computerResult);
}
// computerPlay();

let userPlay = () => {
    const words = ["Rock", "Paper", "Scissors"];
    let num = Math.floor(Math.random() * 3);
    let userResult = words[num];
    return userResult
    // console.log(userResult)
}
// userPlay();

let playRound = (userSelection, computerSelection) => {

    // dont forget to come back and .toLowerCase

    // This could also be done with switch but I prefer if statements
    if (userSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats Rock"
    } else if (userSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats Paper"
    } else if (userSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats Scissors"
    } else if (userSelection === "rock" && computerSelection === "rock") {
        return "It's a tie! Rock and Rock"
    } else if (userSelection === "paper" && computerSelection === "paper") {
        return "It's a tie! Paper and Paper"
    } else if (userSelection === "scissors" && computerSelection === "scissors") {
        return "It's a tie! Scissors and Scissors"
    }
}

playRound(userPlay, computerPlay);