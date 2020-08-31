const config = require('../../config/config_base').config
const Category = require('../../models/Category')

module.exports = class CategoryClass {
    static add(name){
        try {
            Category.create({
                name: name
            })
            return true
        }
        catch(err){
            return false
        }
    }
    static delete(id){
        try {
            Category.destroy({where: {id: id}})
            return true
        }
        catch(err){
            return false
        }
    }
    static async getAll(){
        let categories = await Category.findAll({})
        let categoriesNames = []
        if(categories.length){
            categories.map(category => {
                categoriesNames.push(category.dataValues.name)
            })
        }
    }
}