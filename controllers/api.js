const Cart = require('../models/Cart')
const Category = require('../models/Category')
const Customer = require('../models/Customer')
const Merchant = require('../models/Merchant')
const Product = require('../models/Product')
const User = require('../models/User')
const ProductCart = require('../models/ProductCart')

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
    let categories = await Category.findAll({attributes: ['name']})
    let categoriesNames = []
    if(categories.length){
        categories.map(category => {
            categoriesNames.push(category.dataValues.name)
        })
    }
    res.status(200).send(categoriesNames)
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
    try {
        Category.create({
            name: req.body.name,
        })
        res.status(200).send(true)
    }
    catch(err) {
        console.log('Error adding category!', err)
        res.status(500).send(false)
    }
}

exports.deleteCategory = (req, res) => {
    try {
        Category.destroy({where: {name: req.body.name}})
        res.status(200).send(true)
    }
    catch(err) {
        console.log('Error deliting category!', err)
        res.status(500).send(false)
    }
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