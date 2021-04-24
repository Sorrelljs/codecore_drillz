const express = require("express");
const knex = require('../db/client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sgMail = require('@sendgrid/mail');

const router = express.Router();

const sendGridKey = process.env.SENDGRID_KEY;
const resetSecret = process.env.RESET_SECRET;
  

router.get('/sign_in', (req, res) => {
    res.render('sign_in')
})

router.get('/sign_up', (req, res) => {
    res.render('sign_up')
})

router
.route('')
.post((req, res) => {
    const { first_name, last_name, email, password } = req.body
    
    knex('users')
    .insert(
        {
            email: email,
            password: password,
            first_name: first_name,
            last_name: last_name,
        }, '*')
    .then((data) => {
            console.table(data)
    })
    .catch(console.error)
    res.redirect('/user/sign_in')
})



module.exports = router;