const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { verifyJWT } = require("../middlewares/verifyJWT");

// Get all Users route:
router.get("/get-all-users", userController.getAllUsers);

// Get Suggested Users route:
router.get("/get-suggested-users", verifyJWT, userController.getSuggestedUsers);

module.exports = router;
