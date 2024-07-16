const { ref } = require("joi");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const likeSchema = new Schema(
    {
        postId: {
            type: Schema.Types.ObjectId,
            ref: "Post",
            required: false,
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        commentId: {
            type: Schema.Types.ObjectId,
            ref: "Comment",
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

const Like = mongoose.model("Like", likeSchema);

module.exports = Like;
