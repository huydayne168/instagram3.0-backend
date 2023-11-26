const { Router } = require("express");
const authRoute = require("./authRoute");

const router = Router();

// auth router:
router.use("/auth", authRoute);

// post router:
// ...

module.exports = router;
