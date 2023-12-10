const sequelize = require("../../configs/db");
const { DataTypes } = require("sequelize");

const Story = sequelize.define("story", {
    is_out_of_date: { type: DataTypes.BOOLEAN, allowNull: false }, // this will be false for the first 24h and then turn to true so just the owner user can see it
}); // will get user_id

module.exports = Story;
