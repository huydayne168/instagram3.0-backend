const sequelize = require("../../configs/db");
const { DataTypes } = require("sequelize");

const Photo = sequelize.define("photo", {
    url: {
        type: DataTypes.STRING(999),
        allowNull: false,
    },
    type: {
        type: DataTypes.ENUM(["video", "image"]),
    },
});

module.exports = Photo;
