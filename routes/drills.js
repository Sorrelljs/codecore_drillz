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
    .get((req, res) => {
        res.render('drills/new')
    })

router
    .route("/:id")
    .get((req, res) => {
        const id = req.params.id
 
        knex('drillz')
            .where('id', id)
            .first()
            .then(drill => {
                res.render('drills/show', { drill })
            })
    })
    .post((req, res) => {
        const { student_answer, drill_answer } = req.body
        console.log(req.body)

        res.render('drills/answer', { student_answer, drill_answer })

        // async function checkAnswer() {
        //     if (student_answer == drill_answer) {
        //         answer_correct = true
        //     } else {
        //         answer_correct = false
        //     }
        // }
        // checkAnswer().then(answer_correct => {
        //     res.render('drills/answer', { answer_correct })
        // })
    })
    .delete((req, res) => {
        const id = req.params.id

        knex('drillz')
            .where('id', id)
            .del()
            .then(() => {
                console.log('Article deleted')
                res.redirect('/drills')
        })
    });

router
    .route("/:id/edit")
    .get((req, res) => {
        const id = req.params.id

        knex('drillz')
            .where('id', id)
            .first()
            .then(drill => {
                res.render("drills/edit", { drill })
            })
    });



module.exports = router;
