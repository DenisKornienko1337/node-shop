const CategoryClass = require('./classes/CategoryClass')
const {Cart, Category, Product, User, ProductCart} = require('../models/index')

exports.getAll = async (req, res) => {
  let categories = await CategoryClass.getAll()
  if(!categories) res.status(500).send(false)
  res.status(200).send(categories)
}

exports.add = (req, res) => {
  CategoryClass.add(req.body.name) ? res.status(200).send(true) : res.status(500).send(false)
}

exports.delete = (req, res) => {
  CategoryClass.delete(req.body.id) ? res.status(200).send(true): res.status(500).send(false)
}