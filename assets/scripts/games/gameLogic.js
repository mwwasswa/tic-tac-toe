// const store = require('./../store.js')
//
// const gameBoard = store.game.cells
// const counter = 1
//
// const checkGame = function () {
//   let winCondition = false
//
//   if (winCondition === false && counter <= 9) {
//     if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[0] !== '') {
//       winCondition = true
//     } else if (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] && gameBoard[3] !== '') {
//       winCondition = true
//     } else if (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && gameBoard[6] !== '') {
//       winCondition = true
//     } else if (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] && gameBoard[0] !== '') {
//       winCondition = true
//     } else if (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] && gameBoard[1] !== '') {
//       winCondition = true
//     } else if (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && gameBoard[2] !== '') {
//       winCondition = true
//     } else if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[0] !== '') {
//       winCondition = true
//     } else if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[2] !== '') {
//       winCondition = true
//     } else if (winCondition === false && counter === 9) {
//       console.log('Tie game!')
//       return winCondition
//     }
//     console.log(counter)
//     if (winCondition === true) {
//       alert('Winner!')
//       return winCondition
//     }
//   }
// }
//
// // const switchPlayer = function () {
// //   if (currentPlayer === 'X') {
// //     currentPlayer = 'O'
// //   } else {
// //     currentPlayer = 'X'
// //   }
// // }
//
// module.exports = {
//   checkGame,
//   counter,
//   gameBoard
// }
