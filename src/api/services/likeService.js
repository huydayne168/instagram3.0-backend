const { StatusCodes } = require("http-status-codes");
const likeQuery = require("../mongooseQuery/likeQuery");
const postQuery = require("../mongooseQuery/postQuery");

// Create Like:
exports.createLikePost = (currentUserId, postId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const post = await postQuery.findAPost(postId);
            if (!post) {
                reject({
                    status: StatusCodes.NOT_FOUND,
                    message: "post not found!",
                });
            } else {
                const like = await likeQuery.createLikePost(
                    currentUserId,
                    postId
                );
                post.likes.push(like._id);
                await post.save();
                resolve({
                    like,
                    status: StatusCodes.CREATED,
                    message: "like created!",
                });
            }
        } catch (error) {
            reject({
                status: StatusCodes.INTERNAL_SERVER_ERROR,
                message: "something wrong, can not like!",
            });
        }
    });
};

// Delete Like:
exports.deleteLikePost = (currentUserId, postId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const like = await likeQuery.deleteLikePost(currentUserId, postId);
            if (!like) {
                reject({
                    status: StatusCodes.NOT_FOUND,
                    message: "like not found!",
                });
            }
            resolve({
                status: StatusCodes.OK,
                message: "like deleted!",
            });
        } catch (error) {
            reject({
                status: StatusCodes.INTERNAL_SERVER_ERROR,
                message: "something wrong, can not delete like!",
            });
        }
    });
};
