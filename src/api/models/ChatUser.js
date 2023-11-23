const sequelize = require("../../configs/db");

const ChatUser = sequelize.define("chat_user", {});

module.exports = ChatUser;
