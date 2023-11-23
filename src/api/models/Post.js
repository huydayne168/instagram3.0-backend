const sequelize = require("../../configs/db");
const { DataTypes } = require("sequelize");

const Post = sequelize.define("post", {
    title: {
        type: DataTypes.STRING(9999),
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
});

module.exports = Post;
