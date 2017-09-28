'use strict'

const signIn = function () {
  $('.account-actions-holder').children().hide()
  $('.welcome').hide()

  $('.table-page').children().show()
  $('.sign-out-div').show()
  $('#reveal-change-password').show()
}

const signOut = function () {
  $('.account-actions-holder').children().show()
  $('.account-forms').children('.start-forms').show()
  $('.welcome').show()

  $('.table-page').children().hide()
  $('.user-messages').children().hide()
  $('#change-password').hide()
  $('.sign-out-div').hide()
  $('#table-holder').empty()
}

const showChangePassword = function () {
  $('.account-actions-holder').children().show()
  $('.account-forms').children().show()

  $('.table-page').children().hide()
  $('.user-messages').children().hide()
  $('.start-forms').hide()
  $('#reveal-change-password').hide()
  $('#table-holder').empty()
}

const changePasswordSuccess = function () {
  $('.account-actions-holder').children().hide()
  $('.welcome').hide()

  $('.table-page').children().show()
  $('.sign-out-div').show()
  $('#reveal-change-password').show()
}

module.exports = {
  signIn,
  signOut,
  showChangePassword,
  changePasswordSuccess
}
