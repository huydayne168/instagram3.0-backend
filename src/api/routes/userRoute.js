const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { validateBody } = require("../middlewares/validate");
const { signUpSchema } = require("../validations/userValidation");

///////// user routers:
// Sign up router:
router.post("/sign-up", validateBody(signUpSchema), userController.signUp);

module.exports = router;
