'use strict'

const userApi = require('./api.js')
const userUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateAccount = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('passing through event js')
  console.log(data)
  if (data.credentials.password !== data.credentials.password_confirmation) {
    $('.user-messages').children().hide()
    $('#password-match-error').show()
  } else {
    userApi.create(data)
      .then(userUi.onCreateSuccess)
      .catch(userUi.onError)
  }
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  userApi.signIn(data)
    .then(userUi.onSignInSuccess)
    .catch(userUi.onSignInError)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  userApi.changePassword(data)
    .then(userUi.onChangePasswordSuccess)
    .catch(userUi.onChangePasswordError)
}

const onSignOut = function (event) {
  event.preventDefault()
  userApi.signOut()
    .then(userUi.onSignOutSuccess)
    .catch(userUi.onSignOutError)
}
module.exports = {
  onCreateAccount,
  onSignIn,
  onChangePassword,
  onSignOut
}
