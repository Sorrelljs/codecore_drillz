const knex = require('../db/client')
const bcrypt = require('bcrypt')
const router = require('express').Router()


router.get('/new', (request, response) => {
    response.render('users/new')
})

router.post('/', async (request, response) => {
    const {f_name, l_name, email, password} = request.body

    const hashedPassword = await bcrypt.hash(password, 10)

    const [ user ] = await knex('users')
    .insert({
      first_name: f_name,
      last_name: l_name,
      email: email,
      password: hashedPassword,
    }, '*')
    .catch(err => {
        console.log(err)
      response.redirect('/users/new')
    })

    response.redirect('/thank_you')

})


module.exports = router
