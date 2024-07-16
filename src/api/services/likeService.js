const likeQuery = require("../mongooseQuery/likeQuery");

// Create Like:
exports.createLike = (currentUserId, postId, commentId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const like = await likeQuery.createLike(
                currentUserId,
                postId,
                commentId
            );
            resolve({
                like,
                status: StatusCodes.CREATED,
                message: "like created!",
            });
        } catch (error) {
            reject({
                status: StatusCodes.INTERNAL_SERVER_ERROR,
                message: "something wrong, can not like!",
            });
        }
    });
};

// Delete Like:
exports.deleteLike = (currentUserId, postId, commentId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const like = await likeQuery.deleteLike(
                currentUserId,
                postId,
                commentId
            );
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
