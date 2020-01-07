const express = require("express");
const router = express.Router();
const db = require("../../dbconfig");
const helpers = require("./helpers")
const restricted = require("../auth/restricted.js");

router.get(`/`, (req, res) => {
    helpers.getPosts()

        .then(post => {
            res.status(200).json(post);
        })
        .catch(err => {
            res.status(500).json({ message: "There was an error." });
        });
});

router.post("/post", (req, res) => {
    let post = req.body;

    helpers.add(post)
        .then(info => {
            res.status(201).json(info);
        })
        .catch(err => {
            res.status(500).json(error);
        });
});

router.delete("/delete/:id", (req, res) => {
    let id = req.params.id;

    helpers.remove(id)
        .then(post => {
            res.status(204).end();
        })
        .catch(err => {
            res.status(500).json({
                error: "Sorry, this item cannot be removed."
            });
        });
});

router.get("/user/:userId", (req, res) => {
    let userId = req.params.userId;
    console.log(userId)

    helpers.getByUserId(userId)
        .then(post => {
            res.status(201).json(post);
        })
        .catch(err => {
            res.status(401).json({ error: "User does not have any posts." });
        });
});

router.put("/update/:id", (req, res) => {
    const id = req.params.id;
    const action = req.body;

    helpers.update(id, action)
        .then(updated => {
            res.status(200).json(updated);
        })
        .catch(error => {
            res.status(500).json({
                error: "The information could not be modified"
            });
        });
});

module.exports = router;