const Todo = require ("../models/todo.models");
const Category = require("../models/category.models");

class TodoServices {
    static async create(newPost){
        try {
            const result = await Todo.create(newPost)
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async todoCategories(userId){
        try {
            const result = await Todo.findByPk(userId, {
                include: {
                    model: Category
                }
            })
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async update(id, data){
        try {
            const updatetodo = await Todo.update(data, {
                where: {id}
            })
            return updatetodo;
        } catch (error) {
            throw error;
        }
    }
    static async delete(id){
        try {
            const result = await Todo.destroy({
                where: {id}
            })
            return result;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = TodoServices;