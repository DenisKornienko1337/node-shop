const Cart = require('../models/Cart')
const Category = require('../models/Category')
const Customer = require('../models/Customer')
const Merchant = require('../models/Merchant')
const Product = require('../models/Product')
const User = require('../models/User')

async function formatProducts(products) {
    let res = []
    for(product of products){
        let productCategory = await Category.findOne({where: {id: product.category_id}})
        delete product.dataValues.category_id
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
    let products = await Product.findAll({attributes: ['name', 'description', 'price', 'category_id']})
    let productsToSend = []
    if(products.length){
        productsToSend = await formatProducts(products)
    }
    res.status(200).send(productsToSend)
}

exports.getAllCartProducts = (req, res) => {
    
}

exports.getMerchantProducts = async(req, res) => {
    let products = await Product.find({where: {merchant_id: req.body.merchant_id}})
    let productsToSend = []
    if(products.length){
        productsToSend = await formatProducts(products)
    }
    res.status(200).send(productsToSend)
}

exports.getCategoryProducts = (req, res) => {

}

exports.addProduct = (req, res) => {
    try {
        Product.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category_id: req.body.category,
            merchant_id: req.user.id,
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

exports.addProductToCart = (req, res) => {
    
}

exports.deleteProductFromCart = (req, res) => {
    
}

exports.deleteAllFromCart = (req, res) => {
    
}