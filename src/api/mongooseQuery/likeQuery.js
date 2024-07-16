const Like = require("../models/like");

// Create Like:
exports.createLike = (currentUserId, postId, commentId) => {
    return Like.create({ userId: currentUserId, postId, commentId });
};

// Delete Like:
exports.deleteLike = (currentUserId, postId, commentId) => {
    return Like.findOneAndDelete({ userId: currentUserId, postId, commentId });
};
