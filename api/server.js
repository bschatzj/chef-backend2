const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const authRoute = require("./auth/auth-router");
const recipeRoute = require("./recipes/recipe-router");
const userRoute = require("./user/userRouter")

const server = express();

server.use(helmet());
server.use(morgan())
server.use(express.json());
server.use(cors());

server.use("/api/login", authRoute)
server.use("/api/recipes", recipeRoute)
server.use("/api/user", userRoute)


server.get("/", (req, res) => {
    res.send("Now we're cooking!!!!");
});

module.exports = server;