const {Cart, Category, Product, User, ProductCart} = require('../models/index')

//productId, cartId
exports.addProductToCart = (req, res) => {
  try {
      ProductCart.create({
          productId: req.body.productId,
          cartId: req.body.cartId
      })
      res.status(200).send(true)
  } catch(err) {
      console.log(err)
      res.status(500).send(false)
  }
}

exports.deleteProductFromCart = (req, res) => {
  try {
      ProductCart.destroy({where: {cartId: req.body.cartId, productId: req.body.productId}})
      res.status(200).send(true)
  }
  catch(err){
      console.log(err)
      res.status(500).send(false)
  }
}

exports.deleteAllFromCart = (req, res) => {
  try {
      ProductCart.destroy({where: {cartId: req.body.cartId}})
      res.status(200).send(true)
  }
  catch(err){
      console.log(err)
      res.status(500).send(false)
  }
}
