const sequelize = require("../../configs/db");
const { DataTypes } = require("sequelize");

const Message = sequelize.define("message", {
    contents: {
        type: DataTypes.STRING(9999),
        allowNull: false,
    },
});

module.exports = Message;
