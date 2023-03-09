const { Router } = require("express")
const User = require("../models/users.models")
const Todo = require("../models/todo.models")
const Category = require("../models/category.models")
const { createUser } = require("../controllers/users.controller");

const router = Router();

router.post("/api/v1/users", createUser);


module.exports = router;