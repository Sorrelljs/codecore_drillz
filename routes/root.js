const express = require('express')
const knex = require('../db/client');
const router = express.Router()


router.get('/', (request, response) => {
    response.render('welcome')
  })


module.exports = router