const TodoServices = require("../services/todo.service");


const deleteTodo = async (req, res) =>{
    try {
        const {id} = req.params
        const result = await TodoServices.delete(req.params.id)
        res.status(204).send("no content")
    } catch (error) {
        res.status(400).json(error)        
    }

};

const updateTodo = async (req, res) => {
    try {
        const {id} = req.params
        const data = req.body
        const Update = await TodoServices.update(id, data)
        res.status(204).send
    } catch (error) {
        res.status(400).json(error)
    }  
};


const getTodoCategories = async (req,res) =>{
    try {
        const {userId} = req.params
        const TodoCategories = await TodoServices.TodoCategories(userId)
            res.json(TodoCategories)
    } catch (error) {
        res.status(400).json(error)
    }
};

const createTodo = async (req,res) => {
    try {
        const newPost = req.body
        const post = await TodoServices.create(newPost)
        res.status(201).json(post)
    } catch (error) {
        res.status(400).json(error)
    }
};

module.exports = {
    deleteTodo,
    updateTodo,
    getTodoCategories,
    createTodo
}