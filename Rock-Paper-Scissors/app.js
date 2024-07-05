const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')

let userChoice
let ComputerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e)=>{
  userChoice =  e.target.id
  userChoiceDisplay.innerHTML = userChoice

  generateComputerChoice()
  getResult()
  
}))

function generateComputerChoice(){
  const randomNumber=Math.floor(Math.random()*possibleChoices.length)
  console.log(randomNumber)
  if(randomNumber==1){
    computerChoice='paper'
  }
  if(randomNumber==2){
    computerChoice='scissors'
  }
  if(randomNumber==3){
    computerChoice='rock'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
  if(computerChoice===userChoice){
    result='its a draw'
  }
  if(computerChoice==='rock' && userChoice==='paper'){
    result='You Win'
  }
  if(computerChoice==='paper' && userChoice==='rock'){
    result='You lose'
  }
  if(computerChoice==='rock' && userChoice==='scissors'){
    result='you lose'
  }
  if(computerChoice==='scissors' && userChoice==='rock'){
    result='You Win'
  }
  if(computerChoice==='scissors' && userChoice==='paper'){
    result='You lose'
  }
  if(computerChoice==='paper' && userChoice==='scissors'){
    result='You win'
  }
  
  
  resultDisplay.innerHTML = result
  
  
  
  
  
}

