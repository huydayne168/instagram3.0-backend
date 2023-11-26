const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { validateBody } = require("../middlewares/validate");
const { signUpSchema, loginSchema } = require("../validations/userValidation");

///////// user routers:
// Sign up router:
router.post("/sign-up", validateBody(signUpSchema), authController.signUp);

router.post("/login", validateBody(loginSchema), authController.login);

module.exports = router;
