require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const sequelize = require("./configs/db");
const credential = require("./api/middlewares/credentials");
const cors = require("cors");
const corsOptions = require("./configs/allowOrigins");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const { bodyParserUrlencodedConfigs } = require("./configs/bodyParser");
const router = require("./api/routes/index");

app.use(credential);
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser.json({ limit: "35mb" }));
app.use(bodyParser.urlencoded(bodyParserUrlencodedConfigs));

// router:
app.use("/v1/api", router);

// Error handling:
app.use((error, req, res, next) => {
    console.log(error);
    const status = error.status || 500;
    const message = error.message;
    res.status(status).json({ message: message });
});

// server listen:
app.listen(PORT, () => {
    console.log("I am running in " + PORT);
});
