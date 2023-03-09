const { DataTypes } = require("sequelize");
const db = require("../utils/database");


const User = db.define("users", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(60),
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING(20),
        allowNull: false,
    }
},
    {
        timestamps: false
    });

module.exports = User;