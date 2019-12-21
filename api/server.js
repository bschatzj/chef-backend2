const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const server = express();

server.use(helmet());
server.use(morgan())
server.use(express.json());
server.use(cors());


server.get("/", (req, res) => {
    res.send("Now we're cooking!!!!");
});

module.exports = server;