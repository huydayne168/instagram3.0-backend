const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        username: {
            type: String,
            require: true,
        },
        password: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
        },
        bio: {
            type: String,
        },
        fullName: {
            type: String,
            require: true,
        },
        avatar: {
            type: String,
        },
        refreshToken: String,
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
