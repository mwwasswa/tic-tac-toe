'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./games/events')

$(() => {
  $('#new-game').hide()
  $('#game-records').hide()
  $('#gameBoard').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#new-game').on('click', gameEvents.onCreateGame)
  // $('#play-again').on('click', gameEvents.onPlayAgain)
  $('.tic').on('click', gameEvents.boardClick)
  $('#game-records').on('click', gameEvents.onGameRecords)
})
