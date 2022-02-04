/*-------------------------------- Constants --------------------------------*/
const playerOne = "X"
const playerTwo = "O"



/*---------------------------- Variables (state) ----------------------------*/
let isWinner, gameTie, guessSquare, playerOneGuesses, playerTwoGuesses, whoseTurn

let boardArray = []
let playerTurn = ""

/*------------------------ Cached Element References ------------------------*/
const messageEl = document.querySelector('#message')
const square0 = document.querySelector('#sq0')
const square1 = document.querySelector('#sq1')
const square2 = document.querySelector('#sq2')
const square3 = document.querySelector('#sq3')
const square4 = document.querySelector('#sq4')
const square5 = document.querySelector('#sq5')
const square6 = document.querySelector('#sq6')
const square7 = document.querySelector('#sq7')
const square8 = document.querySelector('#sq8')
const boardSect = document.querySelector('.board')
const replayBtn = document.querySelector('#replay-button')
const startBtn = document.querySelector('#start-button')
const allSquares = document.querySelectorAll('.squares')

console.log(replayBtn)
console.log(startBtn);
console.log(boardSect);
console.log(square0);
console.log(allSquares);
/*----------------------------- Event Listeners -----------------------------*/

boardSect.addEventListener("reset", init)

boardSect.addEventListener('click', handleClick)

// boardSect.addEventListener("button"), function(evt) {
//   evt.preve
// }

/*-------------------------------- Functions --------------------------------*/
init()

function init (){
  //show empty squares
  boardArray = [1, null, null, null, null, null, null, null, null]
  
  //starting turn
let playerTurn = 1 // 1 is player "X" and 0 is player "O"
// winner
isWinner = null
//hide reset button
replayBtn.setAttribute("hidden", true)
//hide messageEl text
messageEl.textContent = ""
//render function
render()

}

function render(){
  
  let squarePlaceholder
  
    boardArray.forEach((square, idx) => {
      if(square === 1 ){ 
        squarePlaceholder = "x"
      } else if(square === -1 ) {
        squarePlaceholder = "o"
      } else {
        squarePlaceholder = null
      }
      
    allSquares[idx].textContent = squarePlaceholder
    console.log(squarePlaceholder);
    
    
  })
  renderWin()

};

function handleClick(evt){
  console.log(evt.target)
}

function renderState(){

  if(renderWin === "T") {
    messageEl.textContent = "This one was a Scrath! Replay see who is better: X's or O's?"
  } else {
    messageEl.textContent = `Congratulations, ${Winner} you win!`
  }
}



function renderWin(){

}
