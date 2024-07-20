const { Post } = require("../models");

// Create a Post:
const createPost = (data) => {
    return Post.create({
        caption: data.caption,
        userId: data.userId,
        photoVideo: data.photoVideo,
    });
};

// Get All Posts
const getAllPosts = () => {
    return Post.find()
        .populate("userId")
        .populate("photoVideo")
        .populate("likes")
        .sort({ createdAt: -1 });
};

// Get Following Posts:
const getFollowingPosts = (userIdList) => {
    return Post.find({ userId: { $in: userIdList } });
};

// Find a Post:
const findAPost = (postId) => {
    return Post.findById(postId);
};

// Update a Post:
const updatePost = (postId, data) => {
    return Post.findByIdAndUpdate(postId, data, { new: true });
};

// exports:
module.exports = {
    createPost,
    getAllPosts,
    getFollowingPosts,
    findAPost,
    updatePost,
};
