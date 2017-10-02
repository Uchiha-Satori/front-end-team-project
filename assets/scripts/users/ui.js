'use strict'

const app = require('../store.js')
const ux = require('./ux.js')

const onCreateSuccess = function () {
  $('.user-messages').children().hide()
  $('#create-account-success').show()
  $('#create-account')[0].reset()
}

const onError = function (response) {
  $('.user-messages').children().hide()
  $('#create-account-error').show()
}

const onSignInSuccess = function (data) {
  ux.signIn()
  app.user = data.user
  $('#signin-account')[0].reset()
}

const onSignInError = function (response) {
  $('.user-messages').children().hide()
  $('#sign-in-error').show()
}

const onChangePasswordSuccess = function () {
  ux.changePasswordSuccess()
  $('#change-password')[0].reset()
}

const onChangePasswordError = function (response) {
  $('#password-change-error').show()
}

const onSignOutSuccess = function () {
  app.user = null
  ux.signOut()
}

const onSignOutError = function () {
}

module.exports = {
  onCreateSuccess,
  onError,
  onSignInSuccess,
  onSignInError,
  onChangePasswordSuccess,
  onChangePasswordError,
  onSignOutSuccess,
  onSignOutError
}
