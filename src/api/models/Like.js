const sequelize = require("../../configs/db");
const { DataTypes } = require("sequelize");

const Like = sequelize.define("like", {}); // Like will have user_id and post_id columns

module.exports = Like;
