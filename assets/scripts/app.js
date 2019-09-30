'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./games/events')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#new-game').on('click', gameEvents.onCreateGame)
  // $('#play-again').on('click', gameEvents.onPlayAgain)
  $('.tic').on('click', gameEvents.boardClick)
  $('#get-games').on('click', gameEvents.onGetGames)
})
