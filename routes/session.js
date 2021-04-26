const knex = require('../db/client')
const bcrypt = require('bcrypt')
const router = require('express').Router()


router.get('/new', (request, response) => {
    response.render('session/new')
})

router.post('/', async (request, response) => {

    const { e_mail, password } = request.body
    const user = await knex('users').where('email', e_mail).first()
  
    if (user) {

      const isValid = await bcrypt.compare(password, user.password)
  
      if (isValid) {
            request.session.user = {
            id: user.id,
            username: user.first_name,
            }
            response.redirect('/drill_groups')
        } else {
        console.log('there was an error trying to get the username')
  
        response.redirect('/session/new')
      }
    }
})


router.delete('/', (request, response) => {

    request.session.destroy(() => {

      response.locals.username = null
      response.render('welcome')
    })
})

module.exports = router
