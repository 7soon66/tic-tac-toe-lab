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
  }
}

const restart = () => {
  board.fill(null)
  squareEls.forEach((sequare) => {
    sequare.textContent = ' '
  })
  currentPlayer = turn
}
restartBtn.addEventListener('click', restart)
//   sqr.addEventListener('click', play)
//   console.log("")

// // const init = () => {
// //   squareEls.forEach((cell) => {
// //     cell.addEventListener('click', play)
// //     console.log('we choose a cell')
// //     render()
// //   })
// //   render()
// //   console.log('here are the winner')
// // }
// // // const updateMessage = () => {
// // //   board.forEach((boards))=>{}
// // // }
// // /*----------------------------- Event Listeners -----------------------------*/
// // board.forEach((boards) => {
// //   document.querySelector(`${boards}`).addEventListener('click', play)
// })
startGmae()
