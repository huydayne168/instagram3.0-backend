const User = require("../models/User");
const userHelper = require("../helpers/userHelper");
const userService = require("../services/userService");

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
