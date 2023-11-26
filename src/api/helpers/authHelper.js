const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { env } = require("process");
require("dotenv").config();

// hash password:
exports.hashPassword = (password) => {
    return bcrypt.hash(password, 12);
};

// compare password:
exports.comparePassword = (p1, p2) => {
    return bcrypt.compare(p1, p2);
};

// generate access token:
exports.generateAccessToken = (userInfo) => {
    const accessToken = jwt.sign(
        {
            userInfo,
        },
        env.ACCESS_TOKEN_CODE,
        {
            expiresIn: "60m",
        }
    );

    return accessToken;
};

// generate refresh token token:
exports.generateRefreshToken = (userInfo) => {
    const refreshToken = jwt.sign(
        {
            userInfo,
        },
        env.REFRESH_TOKEN_CODE,
        {
            expiresIn: "30d",
        }
    );
    return refreshToken;
};
