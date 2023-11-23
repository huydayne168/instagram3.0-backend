const { Router } = require("express");
const userRoute = require("./userRoute");

const router = Router();

// user router:
router.use("/user", userRoute);

// post router:
// ...

module.exports = router;
