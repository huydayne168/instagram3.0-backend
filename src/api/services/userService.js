const { StatusCodes } = require("http-status-codes");
const User = require("../models/User");

// Sign up service:
exports.signUp = async (username, password, email, full_name) => {
    return new Promise(async (resolve, reject) => {
        try {
            const existedEmail = await User.findOne({
                where: {
                    email: email,
                },
            });

            const existedUsername = await User.findOne({
                where: {
                    username: username,
                },
            });

            if (existedEmail) {
                reject({
                    status: StatusCodes.CONFLICT,
                    message: "email",
                });
            } else if (existedUsername) {
                reject({
                    status: StatusCodes.CONFLICT,
                    message: "username",
                });
            } else {
                const newUser = await User.create({
                    email,
                    full_name,
                    username,
                    password,
                });

                resolve({
                    status: StatusCodes.CREATED,
                    data: newUser,
                });
            }
        } catch (error) {
            reject({
                status: StatusCodes.INTERNAL_SERVER_ERROR,
                message: "something wrong!",
            });
        }
    });
};
