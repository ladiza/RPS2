//Add message for user, describing game
console.log("This is rock-paper-scissors game, enter your choice and press enter.")

//Prompt user to input "rock", "paper" or "scissors"
const playerChoice = prompt("Enter your choice: ").toLowerCase()

//Make random choice as computer
const options = Array("rock", "paper", "scissors")
const computerChoice = options[Math.floor(Math.random()*options.length)];

//Show what choosed computer
console.log(`Computer chose ${computerChoice}, you chose ${playerChoice}`)

//Decide who won
function result(computerChoice, playerChoice) {
  if(computerChoice === playerChoice){
    return("It's a draw!")
  } else if (computerChoice === "rock" && playerChoice === "scissors") {
    return("Computer won!")
  } else if (computerChoice === "paper" && playerChoice === "rock") {
    return("Computer won!")
  } else if (computerChoice === "scissors" && playerChoice === "paper") {
    return("Computer won!")
  } else {
    return("You won!")
  }
}

alert(result(computerChoice,playerChoice))

