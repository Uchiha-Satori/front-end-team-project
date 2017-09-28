'use strict'

const productApi = require('./api.js')
const productUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateProduct = function (event) {
  console.log('passing through products event js')
  console.log(data)
  event.preventDefault()
  const data = getFormFields(event.target)
  // may need to update name of create after html is created
  productApi.createProduct(data)
    .then(productUi.onCreateProductSuccess)
    .catch(productUi.onCreateProductError)
}

// is 'const data' necessary for functionality?
const onGetAllProducts = function (event) {
  console.log('passing through get all events.js')
  event.preventDefault()
  const data = getFormFields(event.target)
  productApi.getAllProducts(data)
    .then(productUi.onGetAllProductsSuccess)
    .catch(productUi.onGetAllProductsError)
}

const onGetProduct = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  productApi.getProduct(data)
    .then(productUi.onGetProductSuccess)
    .catch(productUi.onGetProductError)
}

// This is a separate object that holds the variable for the
// update row's id and the update function which is passed from the
// click handler in index.js when a user clicks the update button.
// The updateProduct function's event data comes from a submitted form
// but does not contain a product id. We have to also target the click of
// the update button in order to get the row's id.
const clickId = {
  id: '',
  update: (event) => {
    clickId.id = $(event.target).data('id')
  }
}

const onUpdateProduct = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('passing through events.js')
  console.log(data)
  console.log(clickId.id)
  productApi.updateProduct(data, clickId.id)
    .then(productUi.onUpdateProductSuccess)
    .catch(productUi.onUpdateProductError)
}

const onDeleteProduct = function (event) {
  event.preventDefault()
  const id = $(this).data('id')
  productApi.deleteProduct(id)
    .then(productUi.onDeleteProductSuccess)
    .catch(productUi.onDeleteProductError)
}

module.exports = {
  onCreateProduct,
  onGetAllProducts,
  onGetProduct,
  clickId,
  onUpdateProduct,
  onDeleteProduct
}
