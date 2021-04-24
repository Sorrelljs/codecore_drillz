const express = require("express");
const knex = require('../db/client')
let router = express.Router();

router.route("/:id")
    .get((req, res) => {
        res.write("show drill")
    })
    // .post((req, res) => {
        
    // })
    // .put((req, res) => {
        
    // })
    // .delete((req, res) => {
        
    // });

// router.route("/:id/exercises")
//     .get((req, res) => {
//         ...
//     })
//     .post((req, res) => {
//         ...
//     })
//     .put((req, res) => {
//         ...
//     })
//     .delete((req, res) => {
//         ...
//     });

module.exports = router;
