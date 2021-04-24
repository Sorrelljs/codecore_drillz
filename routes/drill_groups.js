const express = require("express");
const knex = require('../db/client');
let router = express.Router();


// codecore.ca/drill_groups
router
    .route('')
    .get((req, res) => {
        return knex('groups')
            .orderBy('created_at', 'DESC')
            .select('*')
            .then(groups => {
                res.render('drill_groups/index', { groups })
        })
    })
    .post((req, res) => {

        const { name, description, level, points } = req.body
    
        knex('groups')
        .insert(
            {
                name: name,
                description: description,
                level: level,
                points: points,
            }, '*')
        .then((data) => {
            //res.render(data)
                console.table(data)
        })
        .catch(console.error)
        res.redirect('/drill_groups')
    });

// codecore.ca/drill_groups/new
router
    .route("/new")
    .get((req, res) => {
        res.render('drill_groups/new')
    });

// codecore.ca/drill_groups/:id
router
    .route("/:id")
    .get((req, res) => {
        const id = req.params.id

        knex('groups')
            .where('id', id)
            .first()
            .then(group => {
                res.render('drill_groups/show', { group })
            })
    })
    .delete((req, res) => {
        const id = req.params.id

        knex('groups')
            .where('id', id)
            .del()
            .then(() => {
                console.log('Article deleted')
                res.redirect('/drill_groups')
        })
    });

// codecore.ca/drill_groups/:id/edit
router
    .route("/:id/edit")
    .get((req, res) => {
        const id = req.params.id

        knex('groups')
            .where('id', id)
            .first()
            .then(group => {
                res.render("drill_groups/edit", { group })
            })
    });


module.exports = router;