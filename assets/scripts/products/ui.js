'use strict'

const app = require('../store.js')

const onCreateProductSuccess = function () {
  console.log('You successfully created a product')
}

const onCreateproductError = function (response) {
  console.error(response)
}

const onUpdateProductSuccess = function () {
  console.log('You update it good!!!')
}

const onUpdateProductError = function () {
  console.log('Your update fails')
}

const onGetAllProductsSuccess = function (data) {
  $('#table-holder').empty()
  console.log('first line inside function')
  console.log(data.products)
  $(() => {
    const theTemplateScript = $('#product-inventory-template').html()
    // Compile the template
    const theTemplate = Handlebars.compile(theTemplateScript)
    // Define our data object
    const context = {
      fields: data.products
    }
    // Pass our data to the template
    const theCompiledHtml = theTemplate(context)
    // Add the compiled html to the page
    $('#table-holder').prepend(theCompiledHtml)
    console.log('last line within function')
  })
}

const onGetAllProductsError = function (response) {
  console.error(response)
}

const onDeleteProductSuccess = function (data) {
  $('.' + data.product.id).remove()
}

const onDeleteProductError = function (error) {
  console.error(error)
  $('#myModal').modal('show')
}

const onGetProductSuccess = function (data) {
  console.log(data)
}

const onGetProductError = function (error) {
  console.error(error)
}

module.exports = {
  onCreateProductSuccess,
  onCreateproductError,
  onUpdateProductSuccess,
  onUpdateProductError,
  onGetAllProductsSuccess,
  onGetAllProductsError,
  onDeleteProductSuccess,
  onDeleteProductError,
  onGetProductSuccess,
  onGetProductError
}
