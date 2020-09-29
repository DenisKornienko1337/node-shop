const CategoryClass = require('./classes/CategoryClass')
const {Cart, Category, Product, User, ProductCart} = require('../models/index')

exports.getAllCategories = async (req, res) => {
  let categories = await CategoryClass.getAll()
  if(!categories) res.status(500).send(false)
  res.status(200).send(categories)
}

exports.addCategory = (req, res) => {
  CategoryClass.add(req.body.name) ? res.status(200).send(true) : res.status(500).send(false)
}

exports.deleteCategory = (req, res) => {
  CategoryClass.delete(req.body.id) ? res.status(200).send(true): res.status(500).send(false)
}