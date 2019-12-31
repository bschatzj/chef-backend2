const express = require("express");
const router = express.Router();
const db = require("../../dbconfig");
const helpers = require("./user-helpers");
const restricted = require("../auth/restricted.js");

router.put("/update/:id", (req, res) => {
    id = req.params.id
    console.log(id)
    update = req.body
    helpers.update(id, update)

    .then(profile => {
        res.status(200).json(`user ${id}'s profile has been updated`)
    })

    .catch(error => {
        res.status(400).json(`user ${id}'s profile could not be updated `)
    })
})




module.exports = router;