const express = require('express')
const knex = require("../db/client");


const router = express.Router()


router.get('/', (request, response) => {
    response.render('welcome')
})

// const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 30 

// router.post('/sign_in', (request, response) => {
//   // const { e_mail } = request.body
//   // response.cookie("user", e_mail, { maxAge: COOKIE_MAX_AGE })
//   // response.redirect('/')
  
//   const {e_mail} = request.body
  
//   knex('users')
//   .where({email: e_mail})
//   .select("*")
//   .then(user_name => {
//     console.log(user_name)
//     response.render("sign_in", {user_name})
//     response.cookie('user', user_name, {maxAge: COOKIE_MAX_AGE})
//     })
//     .catch(console.error)
    
// })


module.exports = router