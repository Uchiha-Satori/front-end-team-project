'use strict'

const app = require('../store.js')

const createProduct = function (data) {
  console.log('passing through products api js')
  return $.ajax({
    url: app.host + '/products',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data
  })
}

const getAllProducts = function () {
  console.log('passing through getall api.js')
  return $.ajax({
    url: app.host + '/products',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const getProduct = function (id) {
  return $.ajax({
    url: app.host + '/products/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const updateProduct = function (data, id) {
  console.log('passing through api.js!')
  console.log(data)
  return $.ajax({
    url: app.host + '/products/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'product': {
        'quantity_number': data.quantity_number
      }
    }
  })
}

const deleteProduct = function (id) {
  return $.ajax({
    url: app.host + '/products/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

module.exports = {
  createProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct
}
