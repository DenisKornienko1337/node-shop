const { Product } = require('../models/index')
const ProductClass = require('./classes/ProductClass')

async function formatProducts(products) {
  let res = []
  for(product of products){
      let productCategory = await Category.findOne({where: {id: product.categoryId}})
      delete product.dataValues.categoryId
      if(productCategory) product.dataValues.category = productCategory.dataValues
      res.push(product.dataValues)
  }
  return res
}

exports.getAll = async(req, res) => {
  let products = await Product.findAll({attributes: ['name', 'description', 'price', 'categoryId']})
  let productsToSend = []
  if(products.length){
      productsToSend = await formatProducts(products)
  }
  res.status(200).send(productsToSend)
}

exports.add = async (req, res) => {
  try {
      Product.create({
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
          categoryId: req.body.categoryId,
          merchantId: req.user.id,
      })
      res.status(200).send(true)
  }
  catch(err){
      console.log('Error adding product:', err)
      res.status(500).send(false)
  }
}

exports.delete = (req, res) => {
  try {
      Product.destroy({where: {id: req.body.id}})
      res.status(200).send(true)
  }
  catch(err) {
      console.log('Error deliting product!', err)
      res.status(500).send(false)
  }
}

exports.getAllCartProducts = async(req, res) => {
  let productsToSend = []
  let productsIds = await ProductCart.findAll({where: {cartId: req.query.cartId}})
  let ids = productsIds.map(id => {
      return id.dataValues.productId
  })
  let products = await Product.findAll({where: {id: ids}})
  productsToSend = await formatProducts(products)
  res.status(200).send(productsToSend)
}