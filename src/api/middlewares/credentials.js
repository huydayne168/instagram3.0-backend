const allowOrigins = require("../../configs/allowOrigins");

const credential = (req, res, next) => {
    const origin = req.headers.origin;
    console.log(origin);
    if (allowOrigins.includes(origin)) {
        req.header("Access-Control-Allow-Credentials", true);
    }

    next();
};

module.exports = credential;
