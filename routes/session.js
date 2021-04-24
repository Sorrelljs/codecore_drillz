const knex = require('../db/client')
const bcrypt = require('bcrypt')
const router = require('express').Router()


router.get('/new', (request, response) => {
    response.render('session/new')
})

module.exports = router
