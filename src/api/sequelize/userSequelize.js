const User = require("../models/User");

// create new User:
exports.createUser = (email, full_name, username, password) => {
    return User.create({
        email,
        full_name,
        username,
        password,
    });
};

// find An User:
exports.findAnUser = (condition) => {
    return User.findOne({
        where: {
            ...condition,
        },
    });
};
