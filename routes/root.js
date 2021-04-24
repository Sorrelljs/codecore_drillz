const express = require('express')
const knex = require("../db/client");


const router = express.Router()


router.get('/', (request, response) => {
    response.render('welcome')
})

router.get('/thank_you', (request, response) => {
    response.render('thank_you')
})




module.exports = router