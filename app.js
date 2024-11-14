/*-------------------------------- Constants --------------------------------*/
const squareEls = Array.from(document.getElementsByClassName('sqr'))
const restartBtn = document.getElementById('restartBtn')
const messageEl = document.querySelector('#message')
let spaces = document.querySelectorAll('.board')

console.log(squareEls)
const board = ['', '', '', '', '', '', '', '', '']
console.log(board)

/*---------------------------- Variables (state) ----------------------------*/

const turn = 'x'
const otherTurn = 'o'
let currentPlayer = turn
let winner = false
let tie = false

/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/
const startGmae = () => {
  squareEls.forEach((sequare) =>
    sequare.addEventListener('click', sequareClicked)
  )
}
const sequareClicked = (el) => {
  id = el.target.id
  if (!board[id]) {
    board[id] = currentPlayer
    el.target.textContent = currentPlayer
    if (currentPlayer === turn) {
      currentPlayer = otherTurn
    } else {
      currentPlayer = turn
    }
    if (checkForWinner() !== false) {
      messageEl = `${currentPlayer} has won`
      let winner = checkForWinner()
      console.log(winner)
    }
  }
}

const checkForWinner = (board) => {
  const winngCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i < winngCombination.length; i++) {
    const [a, b, c] = winngCombination[i]
    if (
      board[winngCombination[i][0]] !== '' &&
      board[winngCombination[i][1]] === board[winngCombination[i][0]] &&
      board[winngCombination[i][2]] === board[winngCombination[i][1]]
    ) {
      console.log(board[a])
      return board[a]
    }
  }
  // return null
}
const restart = () => {
  board.fill(null)
  squareEls.forEach((sequare) => {
    sequare.textContent = ' '
  })
  currentPlayer = turn
}
restartBtn.addEventListener('click', restart)

startGmae()
