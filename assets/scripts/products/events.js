'use strict'

const productApi = require('./api.js')
const productUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateProduct = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // may need to update name of create after html is created
  productApi.createProduct(data)
    .then(productUi.onCreateProductSuccess)
    .then(onGetAllProducts(event))
    .catch(productUi.onCreateProductError)
}

// is 'const data' necessary for functionality?
const onGetAllProducts = function (event) {
  event.preventDefault()
  productApi.getAllProducts()
    .then(productUi.onGetAllProductsSuccess)
    .catch(productUi.onGetAllProductsError)
}

const onGetProduct = function (event) {
  event.preventDefault()
  const id = $(this).data('id')
  productApi.getProduct(id)
    .then(productUi.onGetProductSuccess)
    .catch(productUi.onGetProductError)
}

// TODO: WHAT WHAT WHAT IS HAPPENING HERE
const onUpdateProduct = function (event) {
  event.preventDefault()
  const id = $(this).data('id')
  const data = getFormFields(event.target)
  productApi.updateProduct(data, id)
    .then(productUi.onUpdateProductSuccess)
    .then(onGetAllProducts(event))
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
  onUpdateProduct,
  onDeleteProduct
}
