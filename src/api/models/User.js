const sequelize = require("../../configs/db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },

    full_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    bio: {
        type: DataTypes.STRING,
    },

    avatar: {
        type: DataTypes.STRING,
    },
});

module.exports = User;
