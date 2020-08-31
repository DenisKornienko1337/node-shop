const {Cart, Category, Product, User, ProductCart} = require('../models/index')

//Classes
const ProductClass = require('./classes/ProductClass')
const CategoryClass = require('./classes/CategoryClass')

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

exports.getAllCategories = async (req, res) => {
    let categories = await CategoryClass.getAll()
    if(!categories) res.status(500).send(false)
    res.status(200).send(categories)
}

exports.getAllProducts = async(req, res) => {
    let products = await Product.findAll({attributes: ['name', 'description', 'price', 'categoryId']})
    let productsToSend = []
    if(products.length){
        productsToSend = await formatProducts(products)
    }
    res.status(200).send(productsToSend)
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

exports.getMerchantProducts = async(req, res) => {
    let products = await Product.findAll({where: {merchantId: req.query.merchantId}})
    let productsToSend = []
    if(products.length){
        productsToSend = await formatProducts(products)
    }
    res.status(200).send(productsToSend)
}

exports.getCategoryProducts = async(req, res) => {
    let products = await Product.findAll({where: {categoryId: req.query.categoryId}})
    let productsToSend = []
    if(products.length){
        productsToSend = await formatProducts(products)
    }
    res.status(200).send(productsToSend)
}

exports.addProduct = async (req, res) => {
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

exports.deleteProduct = (req, res) => {
    try {
        Product.destroy({where: {id: req.body.id}})
        res.status(200).send(true)
    }
    catch(err) {
        console.log('Error deliting product!', err)
        res.status(500).send(false)
    }
}

exports.addCategory = (req, res) => {
    CategoryClass.add(req.body.name) ? res.status(200).send(true) : res.status(500).send(false)
}

exports.deleteCategory = (req, res) => {
    CategoryClass.delete(req.body.id) ? res.status(200).send(true): res.status(500).send(false)
}

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