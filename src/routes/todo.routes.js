const { Router } = require("express")
const { createTodo, getTodoCategories, updateTodo, deleteTodo} = require("../controllers/todo.controller")
const Todo = require("../models/todo.models")


const router = Router();

router.get("/api/v1/todos/:userId/categories", getTodoCategories);

router.post("/api/v1/todos", createTodo);

router.put("/api/v1/todos/:id", updateTodo);

router.delete("/api/v1/todos/:id", deleteTodo) ;


module.exports = router;