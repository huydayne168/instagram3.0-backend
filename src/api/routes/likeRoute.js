const express = require("express");
const { createLike, deleteLike } = require("../mongooseQuery/likeQuery");
const { verifyJWT } = require("../middlewares/verifyJWT");
const { validateReqBody } = require("../middlewares/validateReqBody");
const { likeValidation } = require("../validations/likeValidation");

const router = express.Router();

// Create Like:
router.post(
    "/create-like",
    verifyJWT,
    validateReqBody(likeValidation),
    createLike
);

// Delete Like:
router.delete(
    "/delete-like",
    verifyJWT,
    validateReqBody(likeValidation),
    deleteLike
);

module.exports = router;
