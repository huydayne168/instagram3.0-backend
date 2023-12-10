const sequelize = require("../../configs/db");
const { DataTypes } = require("sequelize");

const Notification = sequelize.define("notifications", {
    contents: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Notification;
