'use strict'
const api = require('./api.js')
const ui = require('./ui.js')
// const gameLogic = require('./gameLogic.js')
const store = require('./../store.js')
let currentPlayer = 'X'
let turnCounter = 1
let winCondition = false
const checkGame = function () {
  const gameBoard = store.game.cells

  if (winCondition === false && turnCounter <= 9) {
    if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[0] !== '') {
      winCondition = true
    } else if (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] && gameBoard[3] !== '') {
      winCondition = true
    } else if (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && gameBoard[6] !== '') {
      winCondition = true
    } else if (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] && gameBoard[0] !== '') {
      winCondition = true
    } else if (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] && gameBoard[1] !== '') {
      winCondition = true
    } else if (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && gameBoard[2] !== '') {
      winCondition = true
    } else if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[0] !== '') {
      winCondition = true
    } else if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[2] !== '') {
      winCondition = true
    } else if (winCondition === false && turnCounter === 9) {
      $('#game-notifications').text('Tie game!')
      return winCondition
    }
    if (winCondition === true) {
      $('#game-notifications').text('Winner!')
      return winCondition
    }
    turnCounter++
  }
}

const boardClick = function (event) {
  // check that the position on the board is empty
  if ($(event.target).text() === '' && winCondition === false) {
    // get the position on the board that was clicked
    const position = event.target.id

    // add the currentPlayer to the HTML
    $(event.target).text(currentPlayer)
    // update the API with the position and currentPlayer
    api.updateGame(position, currentPlayer)
      // if the update is successful
      .then((response) => {
        // save response
        ui.onBoardClickSuccess(response)
        // check for winner
        checkGame()
        // change turn
        if (currentPlayer === 'X') {
          $('#game-notifications').text('Os turn')
          currentPlayer = 'O'
        } else {
          currentPlayer = 'X'
          $('#game-notifications').text('Xs turn')
        }
      })
      .catch(ui.onBoardClickFailure)
  }
}

const onCreateGame = function (event) {
  currentPlayer = 'X'
  turnCounter = 1
  winCondition = false
  $('.tic').text('')
  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

// const onPlayAgain = function (event) {
//   api.playAgain()
//     .then(ui.onNewGameSuccess)
//     .catch(ui.onNewGameFailure)
// }

// to get get history.
const onGameRecords = function (event) {
  event.preventDefault()
  api.getGame()
    .then(ui.onGetRecordSuccess)
    .catch(ui.onGetRecordFailure)
}
module.exports = {
  onCreateGame,
  boardClick,
  onGameRecords
  // onPlayAgain
}
