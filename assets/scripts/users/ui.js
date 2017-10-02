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
  console.log('You successfully pooped')
  app.user = data.user
  $('#signin-account')[0].reset()
}

const onSignInError = function (response) {
  $('.user-messages').children().hide()
  $('#sign-in-error').show()
}

const onChangePasswordSuccess = function () {
  console.log('You succesfully change your password')
  ux.changePasswordSuccess()
  $('#change-password')[0].reset()
}

const onChangePasswordError = function (response) {
  console.log('I am in ui.js')
  $('#password-change-error').show()
}

const onSignOutSuccess = function () {
  console.log('You successfully sign out')
  app.user = null
  ux.signOut()
}

const onSignOutError = function (response) {
  console.log(response)
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
