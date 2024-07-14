const { StatusCodes } = require("http-status-codes");
const userQuery = require("../mongooseQuery/userQuery");

// Get All Users:
exports.getAllUsers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allUsers = await userQuery.getAllUsers();

            resolve({
                users: allUsers,
                status: StatusCodes.OK,
            });
        } catch (error) {
            reject({
                status: StatusCodes.INTERNAL_SERVER_ERROR,
                message: "Error to get all users!",
            });
        }
    });
};

// Get Suggested Users:
exports.getSuggestedUsers = (currentUserId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const suggestedUsers = await userQuery.getSuggestedUsers(
                currentUserId
            );

            resolve({
                users: suggestedUsers,
                status: StatusCodes.OK,
            });
        } catch (error) {
            reject({
                status: StatusCodes.INTERNAL_SERVER_ERROR,
                message: "Error to get suggested users!",
            });
        }
    });
};
