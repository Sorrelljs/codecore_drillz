const express = require("express");
const knex = require('../db/client');
let router = express.Router();

router.get("", (req, res) => {
    return knex('groups')
        .orderBy('created_at', 'DESC')
        .select('*')
        .then(groups => {
            res.render('show', { groups })
    })
});


module.exports = router;