const sequelize = require("../../configs/db");
const { DataTypes } = require("sequelize");

const Comment = sequelize.define("comment", {
    contents: {
        type: DataTypes.STRING(999),
        allowNull: false,
    },
});

module.exports = Comment;
