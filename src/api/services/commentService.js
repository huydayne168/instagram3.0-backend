const commentQuery = require("../queries/commentQuery");

// Create Comment:
exports.createComment = async (postId, currentUserId, content) => {
    return new Promise(async (resolve, reject) => {
        try {
            const comment = await commentQuery.createComment(
                postId,
                currentUserId,
                content
            );
            resolve({
                comment,
                status: StatusCodes.CREATED,
                message: "Comment created!",
            });
        } catch (error) {
            reject({
                status: StatusCodes.INTERNAL_SERVER_ERROR,
                message: "Something wrong, can not comment!",
            });
        }
    });
};
