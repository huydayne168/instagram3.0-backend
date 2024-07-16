const likeService = require("../services/likeService");

// Create Like:
exports.createLike = async (req, res, next) => {
    try {
        const currentUserId = req.currentUser.id;
        const { postId, commentId } = req.body;
        const result = await likeService.createLike(
            currentUserId,
            postId,
            commentId
        );
        return res.status(result.status).json(result);
    } catch (error) {
        next(error);
    }
};

// Delete Like:
exports.deleteLike = async (req, res, next) => {
    try {
        const currentUserId = req.currentUser.id;
        const { postId, commentId } = req.body;
        const result = await likeService.deleteLike(
            currentUserId,
            postId,
            commentId
        );
        return res.status(result.status).json(result);
    } catch (error) {
        next(error);
    }
};
