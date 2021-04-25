const express = require("express");
const knex = require('../db/client');
const bcrypt = require('bcrypt');
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
.post(async (req, res) => {
    const { first_name, last_name, email, password } = req.body

    const hashedPassword = await bcrypt.hash(password, 10) 
    
    knex('users')
    .insert(
        {
            email: email,
            password: hashedPassword,
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