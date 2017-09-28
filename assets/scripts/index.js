'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const accountEvents = require('./users/events.js')
const productEvents = require('./products/events.js')
const ux = require('./users/ux.js')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#create-account').on('submit', accountEvents.onCreateAccount)
  $('#signin-account').on('submit', accountEvents.onSignIn)
  $('#change-password').on('submit', accountEvents.onChangePassword)
  $('#signout-account').on('submit', accountEvents.onSignOut)

  $('#get-table').on('click', productEvents.onGetAllProducts)
  $('#create-product').on('submit', productEvents.onCreateProduct)
  $(document).on('click', '.delete-product-button', productEvents.onDeleteProduct)
  $(document).on('submit', '.update-product-form', productEvents.onUpdateProduct)
  $(document).on('click', '.update-product-button', productEvents.clickId.update)

  $('.table-page').children().hide()
  $('.user-messages').children().hide()
  $('.sign-out-div').hide()
  $('#change-password').hide()

  $('#reveal-change-password').on('click', ux.showChangePassword)
})
