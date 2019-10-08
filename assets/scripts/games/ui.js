'use strict'
const store = require('../store')

const onCreateGameSuccess = function (newGame) {
  // console.log('its working', newGame)
  store.game = newGame.game
  $('#game-notifications').text('')
  $('#game-notifications').hide()
  $('#game-results').text('')
  $('#game-results').hide()
}

const onBoardClickSuccess = function (response) {
  // console.log('its working', response)
  store.game = response.game
  $('#game-results').show()
  $('#game-notifications').show()
}

const onNewGameSuccess = function (restartGame) {
  // console.log('it restarted', restartGame)
  store.game = restartGame.game
}

const onGetRecordSuccess = function (records) {
  $('.game-history').html(records.games.length)
  // console.log(records)
  $('.game-history').show()
  setTimeout(function () {
    $('.game-history').html('')
  }, 4000)
  // store.game = records.game
}

module.exports = {
  onCreateGameSuccess,
  onBoardClickSuccess,
  onNewGameSuccess,
  onGetRecordSuccess
}
