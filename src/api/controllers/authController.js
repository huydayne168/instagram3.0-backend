const User = require("../models/User");
const userHelper = require("../helpers/authHelper");
const userService = require("../services/authService");

// Sign up
exports.signUp = async (req, res, next) => {
    const { username, password, email, full_name } = req.body;
    try {
        const hashedPassword = await userHelper.hashPassword(password);
        const result = await userService.signUp(
            username,
            hashedPassword,
            email,
            full_name
        );
        console.log(result);
        res.json(result);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// Log in
exports.login = async (req, res, next) => {
    const { username, password } = req.body;
    try {
        const result = await userService.login(res, username, password);
        res.json(result);
    } catch (error) {
        console.log(error);
        next(error);
    }
};
