/*-------------------------------- Constants --------------------------------*/
const playerOne = -1
const playerTwo = 1

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]



/*---------------------------- Variables (state) ----------------------------*/
let boardArray, playerTurn, isWinner


/*------------------------ Cached Element References ------------------------*/
const messageEl = document.querySelector('#message')
const boardSect = document.querySelector('.board')
const replayBtn = document.querySelector('#replay-button')
const allSquares = document.querySelectorAll('.squares')

console.log(replayBtn)
console.log(boardSect);
console.log(allSquares);
/*----------------------------- Event Listeners -----------------------------*/

boardSect.addEventListener("reset", init)

boardSect.addEventListener('click', handleClick)

// boardSect.addEventListener("button"), function(evt) {
//   evt.preve
// }

/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  //show empty squares
  boardArray = [null, null, null, null, null, null, null, null, null]
  console.log(boardArray)
  //starting turn
  playerTurn = 1 // 1 is player "X" and 0 is player "O"
  // winner
  isWinner = null
  //hide reset button
  replayBtn.setAttribute("hidden", true)
  //hide messageEl text
  messageEl.textContent = ""
  //render function
  render()

}

function render() {
  let squareColor
  let squarePlaceholder

  boardArray.forEach((square, idx) => {
    if (square === 1) {
      squareColor = "red"
      squarePlaceholder = "X"
    } else if (square === -1) {
      squareColor = "blue"
      squarePlaceholder = "O"
    } else if (square === null) {
      squareColor = "grey"
      squarePlaceholder = null
    }
    allSquares[idx].style.color = squareColor
    allSquares[idx].innerText = squarePlaceholder
  })
  if (!isWinner){
    messageEl.textContent = `It is ${playerTurn === 1 ? "X" : "O"} Turn`
  } else if (isWinner === "T") {
    messageEl.textContent = "This one was a Scrath! Replay see who is better: X's or O's?"
  } else {
    messageEl.textContent = `Congratulations, ${isWinner === 1 ? "X" : "O"} you win!`
  }
  getWinner()
};

function handleClick(evt) {
  let squareIndex = parseInt(evt.target.id.replace('sq', ''))

  if (squareIndex === -1 || squareIndex === 1) {
    return
  } else if (isWinner !== null) {
    return
  }
  // this tells populates the index to the player that clicked: 1 or -1
  boardArray[squareIndex] = playerTurn
  // alternate turns
  // multiplying by -1 will alternate between -1 and 1
  playerTurn = playerTurn * -1
  
  isWinner = getWinner
  render()
  console.log(boardArray)
}



