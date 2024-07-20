const { StatusCodes } = require("http-status-codes");
const commentQuery = require("../mongooseQuery/commentQuery");
const postQuery = require("../mongooseQuery/postQuery");

// Create Comment:
exports.createComment = async (postId, currentUserId, content) => {
    return new Promise(async (resolve, reject) => {
        try {
            // find the post:
            const post = await postQuery.findAPost(postId);
            if (!post) {
                reject({
                    status: StatusCodes.NOT_FOUND,
                    message: "Post not found!",
                });
            } else {
                const comment = await commentQuery.createComment(
                    postId,
                    currentUserId,
                    content
                );

                // add this comment to the post:
                post.comments.push(comment._id);
                await post.save();

                resolve({
                    comment,
                    status: StatusCodes.CREATED,
                    message: "Comment created!",
                });
            }
        } catch (error) {
            reject({
                status: StatusCodes.INTERNAL_SERVER_ERROR,
                message: "Something wrong, can not comment!",
            });
        }
    });
};
