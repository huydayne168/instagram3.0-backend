const sequelize = require("../../configs/db");
const { DataTypes } = require("sequelize");

const Photo = sequelize.define("photo", {
    url: {
        type: DataTypes.STRING(999),
        allowNull: false,
    },
});

module.exports = Photo;
