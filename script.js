//start a game
game()

//Bundle everything into game() function and play 5 rounds
function game() {
  let userScore = 0
  let computerScore = 0

  for (let i = 0; i < 5; i++) {
    //Add message for user, describing game
    console.log(`This is rock-paper-scissors game, round ${i+1} enter your choice and press enter.`)
    let round = playRound()
    if (round === 0){
      computerScore++
    } else if (round === 1){
      userScore++
    }
  }

  const result = gameResult(computerScore,userScore)
  alert(result +` Computer score is ${computerScore}, your score is ${userScore}`)
}

//playRound function returns 0 if computer won, 1 if player won, 2 if draw occured
function playRound(){
  //Prompt user to input "rock", "paper" or "scissors"
  const playerChoice = prompt("Enter your choice: ").toLowerCase()
  const computerChoice = makeChoice()
  showChoice(computerChoice,playerChoice)

  const result = roundResult(computerChoice,playerChoice)
  console.log(result) 

  if (result == "Computer won this round!"){
    return 0
  } else if (result == "You won this round!") {
    return 1
  } else {return 2}
}

//Show what choosed computer
function showChoice(computerChoice,playerChoice){
  console.log(`Computer chose ${computerChoice}, you chose ${playerChoice}`)
}

//Make random choice as computer
function makeChoice(){
  const options = Array("rock", "paper", "scissors")
  return options[Math.floor(Math.random()*options.length)]
}

//Decide who won round
function roundResult(computerChoice, playerChoice) {
  if(computerChoice === playerChoice){
    return("It's a draw!")
  } else if (computerChoice === "rock" && playerChoice === "scissors") {
     return("Computer won this round!")
   } else if (computerChoice === "paper" && playerChoice === "rock") {
    return("Computer won this round!")
   } else if (computerChoice === "scissors" && playerChoice === "paper") {      
    return("Computer won this round!")
  } else {
    return("You won this round!")
      }
}

//decide who won the game
function gameResult(computerScore, playerScore){
  if (playerScore > computerScore){
    return "You won!"
  } else if (computerScore > playerScore){
    return "Computer won!"
  } else {
    return "It's a draw!"
  }
}