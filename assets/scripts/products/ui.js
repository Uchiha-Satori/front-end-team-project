'use strict'

const onCreateProductSuccess = function () {
  $('#create-product')[0].reset()
}

const onCreateproductError = function (response) {
}

const onUpdateProductSuccess = function () {
  $('.update-product-form')[0].reset()
}

const onUpdateProductError = function () {
}

const onGetAllProductsSuccess = function (data) {
  $('#table-holder').empty()
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
  })
}

const onGetAllProductsError = function (response) {
}

const onDeleteProductSuccess = function (data) {
  $('.' + data.product.id).remove()
}

const onDeleteProductError = function () {
  $('#myModal').modal('show')
}

const onGetProductSuccess = function (data) {
  $('#table-holder').empty()
  $(() => {
    const theTemplateScript = $('#product-show-template').html()
    // Compile the template
    const theTemplate = Handlebars.compile(theTemplateScript)
    // Define our data object
    const context = data.product
    // Pass our data to the template
    const theCompiledHtml = theTemplate(context)
    // Add the compiled html to the page
    $('#table-holder').prepend(theCompiledHtml)
  })
}

const onGetProductError = function () {
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
