require("dotenv").config();
const { Sequelize } = require("sequelize");

// Connect to database Postgresql:
const sequelize = new Sequelize({
    host: "localhost",
    dialect: "postgres",
    port: 5432,
    database: "Instagram3.0",
    username: "postgres",
    password: process.env.DB_PASSWORD,
});

sequelize
    .sync({ alter: true })
    .then((data) => {
        console.log("All models were synchronized successfully.");
    })
    .catch((error) => {
        console.log("failed to synced!");
    });

module.exports = sequelize;
