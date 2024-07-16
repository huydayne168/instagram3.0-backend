const Comment = require("../models/comment");

// Create Comment:
exports.createComment = (postId, currentUserId, content) => {
    return Comment.create({ postId, userId: currentUserId, content });
};
