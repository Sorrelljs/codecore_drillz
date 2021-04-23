const express = require("express");
let router = express.Router();

router.route("/")
    .get((req, res) => {
        res.render("display current drill groups")
    })


module.exports = router;