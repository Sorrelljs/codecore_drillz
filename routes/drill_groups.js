const express = require("express");
const knex = require('../db/client');
let router = express.Router();

router.get("", (req, res) => {
        res.render("show")
    })


module.exports = router;