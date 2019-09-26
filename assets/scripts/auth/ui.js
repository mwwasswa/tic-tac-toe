'use strict'
const store = require('../store')

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const onSignUpSuccess = function () {
  successMessage('Signed up successfully!')
  $('#message').css('color', 'green')
}

const onSignUpFailure = function () {
  failureMessage('Sign up failed')
  $('#message').css('color', 'red')
}

const onSignOutSuccess = function () {
  successMessage('Signed out successfully!')
  $('#message').css('color', 'green')
}

const onSignOutFailure = function () {
  failureMessage('Sign out failed')
  $('#message').css('color', 'red')
}

const onSignInSuccess = function (responseData) {
  successMessage('Signed in successfully!')
  store.user = responseData.user
  $('#message').css('color', 'green')
}

const onSignInFailure = function () {
  failureMessage('Sign in failed')
  $('#message').css('color', 'red')
}

const onChangePasswordSuccess = function () {
  successMessage('Change Password successfully')
  $('#message').css('color', 'green')
}

const onChangePasswordFailure = function () {
  failureMessage('Change Password failed')
  $('#message').css('color', 'red')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutFailure,
  onSignOutSuccess,
  onChangePasswordSuccess,
  onChangePasswordFailure

}
