const { Router } = require("express");
const authRoute = require("./authRoute");
const postRoute = require("./postRoute");
const userRoute = require("./userRoute");

const router = Router();

// auth router:
router.use("/auth", authRoute);

// post router:
router.use("/post", postRoute);

// user route:
router.use("/user", userRoute);

module.exports = router;
