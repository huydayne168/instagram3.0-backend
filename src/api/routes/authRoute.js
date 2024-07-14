const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { validateReqBody } = require("../middlewares/validateReqBody");
const { signUpSchema, loginSchema } = require("../validations/authValidation");

///////// user routers:
// Sign up router:
router.post("/sign-up", validateReqBody(signUpSchema), authController.signUp);

// Log in router:
router.post("/login", validateReqBody(loginSchema), authController.login);

// Refresh Access Token:
router.get("/refresh-access-token", authController.refreshAccessToken);

module.exports = router;
