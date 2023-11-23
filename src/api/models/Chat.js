const sequelize = require("../../configs/db");

const Chat = sequelize.define("chat", {}); // Chat only has id column

module.exports = Chat;
