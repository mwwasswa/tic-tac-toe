'use strict'
const store = require('../store')

const onCreateGameSuccess = function (newGame) {
  // console.log('its working', newGame)
  store.game = newGame.game
}

const onBoardClickSuccess = function (response) {
  console.log('its working', response)
  store.game = response.game
}

const onNewGameSuccess = function (restartGame) {
  console.log('it restarted', restartGame)
  store.game = restartGame.game
}

const onGetRecordSuccess = function (records) {
  $('.game-history').html(records.games.length)
  console.log(records)
  // store.game = records.game
}

module.exports = {
  onCreateGameSuccess,
  onBoardClickSuccess,
  onNewGameSuccess,
  onGetRecordSuccess
}
