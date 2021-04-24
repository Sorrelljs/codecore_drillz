const express = require("express");
const path = require("path");
const knex = require("./db/client");
const session = require('express-session')
const logger = require("morgan");
const { render } = require("ejs");
const rootRouter = require('./routes/root')
const usersRouter = require('./routes/users')
const sessionRouter = require('./routes/session')



const app = express();
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs")



app.use(logger("dev"));


// app.get('/sign_up', (req, res) => {
//     res.render('sign_up')
// })


// CREATING AN ACCOUNT 
// app.post('/thank_you', (request, response)=>{

//     const {f_name, l_name, email, password, password_confirmation} = request.body;

//     // CHECKS FOR PASSWORD CONFIRMATION IF THEY DON'T MATCH IT SENDS THEM TO SIMPLE ERROR PAGE 
//     if(password === password_confirmation) {
//         knex('users')
//         .insert({
//             first_name: f_name,
//             last_name: l_name,
//             email: email,
//             password: password
//         }, '*')
//         .then(data => {
//             console.log(data);
//             response.render('thank_you');
//         })
//         .catch(console.error);
//     } else {
//         response.send('<h1> The password confirmation did not match, try again!</h1>')
//     }
// })


// SIGN IN PAGE

// app.get("/sign_in", (request, response) =>{
//     response.render("sign_in")
// })


app.use('/', rootRouter)
app.use('/users', usersRouter)
app.use('/session', sessionRouter) 


const PORT = 3000;
const ADDRESS = "localhost";

app.listen(PORT, ADDRESS, () => {
	console.log(`Server listenning on http://${ADDRESS}:${PORT}`);
});
