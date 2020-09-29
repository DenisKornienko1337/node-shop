const {Cart, Category, Product, User, ProductCart} = require('../../models/index')

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

exports.getMerchantProducts = async(req, res) => {
  let products = await Product.findAll({where: {merchantId: req.query.merchantId}})
  let productsToSend = []
  if(products.length){
      productsToSend = await formatProducts(products)
  }
  res.status(200).send(productsToSend)
}