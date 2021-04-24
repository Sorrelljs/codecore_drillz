const express = require("express");
const knex = require('../db/client')
let router = express.Router();


router
.route('')
.get((req, res) => {
    return knex('drillz')
        .orderBy('created_at', 'DESC')
        .select('*')
        .then(drillz => {
            res.render('drills/index', { drillz })
    })
})

.post((req, res) => {

    const { title, description } = req.body

    knex('drillz')
    .insert(
        {
            title: title,
            description: description,
        }, '*')
    .then((data) => {
        //res.render(data)
        console.table(data)
    })
    .catch(console.error)
    res.redirect('/drills')
});

router
.route('/new')
.get((request, response) => {
    response.render('drills/new')
})



module.exports = router;
