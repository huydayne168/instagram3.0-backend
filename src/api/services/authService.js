const { StatusCodes } = require("http-status-codes");
const User = require("../models/User");
const {
    comparePassword,
    generateAccessToken,
    generateRefreshToken,
} = require("../helpers/authHelper");
const { createUser, findAnUser } = require("../sequelize/userSequelize");

// Sign up service:
exports.signUp = async (username, password, email, full_name) => {
    return new Promise(async (resolve, reject) => {
        try {
            const existedEmail = await findAnUser({ email });
            const existedUsername = await findAnUser({ username });

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
                const newUser = await createUser(
                    email,
                    full_name,
                    username,
                    password
                );
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

// Login service:
exports.login = (res, username, password) => {
    return new Promise(async (resolve, reject) => {
        // find the user:
        const user = await findAnUser({ username });
        if (!user) {
            reject({
                status: StatusCodes.UNAUTHORIZED,
                message: "username",
            });
        } else {
            const matchPassword = await comparePassword(
                password,
                user.password
            );

            if (!matchPassword) {
                reject({
                    status: StatusCodes.UNAUTHORIZED,
                    message: "password",
                });
            } else {
                const accessToken = generateAccessToken(user);
                const refreshToken = generateRefreshToken(user);
                // store refresh token in cookie:
                res.cookie("jwt", refreshToken, {
                    httpOnly: true,
                    secure: true,
                    sameSite: "None",
                    maxAge: 24 * 60 * 60 * 1000,
                });

                resolve({
                    userInfo: user,
                    accessToken: accessToken,
                });
            }
        }
    });
};
