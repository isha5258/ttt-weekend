/*-------------------------------- Constants --------------------------------*/

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

const replayBtn = document.querySelector('#replay-button')
const allSquares = document.querySelectorAll('.squares')

console.log(replayBtn);
console.log(allSquares);
/*----------------------------- Event Listeners -----------------------------*/

replayBtn.addEventListener("click", init)

allSquares.forEach((square) => {
square.addEventListener('click', handleClick)
})

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
  replayBtn.setAttribute("hidden", true)
  //render function
  render()

}

function render() {
  

  boardArray.forEach((square, idx) => {
    let squareColor
    let squareLetter
    if (square === 1) {
      squareColor = "red"
      squareLetter = "X"
    } else if (square === -1) {
      squareColor = "blue"
      squareLetter = "O"
    } else if (square === null) {
      squareColor = "white"
      squareLetter = null
    }
    allSquares[idx].style.color = squareColor
    allSquares[idx].innerText = squareLetter
  })


  if (!isWinner){
    messageEl.innerText = `It is ${playerTurn === 1 ? "X's" : "O's"} turn`
  } else if (isWinner === "T") {
    messageEl.innerText = "This one was a Scrath! Replay see who is better: X's or O's?"
  } else {
    messageEl.textContent = `Congratulations, ${isWinner === 1 ? "X" : "O"} you win!`
  }
};

function handleClick(evt) {
  let squareIndex = parseInt(evt.target.id.replace('sq', ''))

  // if (squareIndex === -1 || squareIndex === 1) {
  //   return
  // } else if (isWinner !== null) {
  //   return
  // }

  if (boardArray[squareIndex] || isWinner) {
    return
  }
  replayBtn.removeAttribute("hidden")
  // this tells populates the index to the player that clicked: 1 or -1
  boardArray[squareIndex] = playerTurn
  // alternate turns
  // multiplying by -1 will alternate between -1 and 1
  playerTurn *= -1
  
  isWinner = getWinner()

  render()
  console.log(boardArray)
}

function getWinner() {

    if (Math.abs(boardArray[0] + boardArray[1] + boardArray[2]) === 3) return boardArray[0]
    if (Math.abs(boardArray[3] + boardArray[4] + boardArray[5]) === 3) return boardArray[3]
    if (Math.abs(boardArray[6] + boardArray[7] + boardArray[8]) === 3) return boardArray[6]
    if (Math.abs(boardArray[0] + boardArray[3] + boardArray[6]) === 3) return boardArray[0]
    if (Math.abs(boardArray[1] + boardArray[4] + boardArray[7]) === 3) return boardArray[1]
    if (Math.abs(boardArray[2] + boardArray[5] + boardArray[8]) === 3) return boardArray[2]
    if (Math.abs(boardArray[0] + boardArray[4] + boardArray[8]) === 3) return boardArray[0]
    if (Math.abs(boardArray[2] + boardArray[4] + boardArray[6]) === 3) return boardArray[2]
    
    if (boardArray.includes(null)) {
      return null
    } else {
      return "T"
    }

  }
