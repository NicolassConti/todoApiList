const Category = require("./category.models")
const Todo = require("./todo.models")
const User = require("./users.models")


const initModels = () => {
    User.hasMany(Todo,{foreignKey: "usersId"})
    Todo.belongsTo(User,{foreignKey: "usersId"})

    Category.hasMany(Todo, {foreignKey: "categoryId"})
    Todo.belongsTo(Category, {foreignKey: "categoryId"})
};

module.exports = initModels;

