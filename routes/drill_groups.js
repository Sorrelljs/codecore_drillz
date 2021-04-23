const express = require("express");
const knex = require('../db/client');
let router = express.Router();

router.get("", (req, res) => {
    return knex('groups')
        .orderBy('created_at', 'DESC')
        .select('*')
        .then(groups => {
            res.render('drill_groups/show', { groups })
    })
});

router.post("", (req, res) => {

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

router.get("/new", (req, res) => {
    res.render('drill_groups/new')
});


module.exports = router;