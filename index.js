const express = require("express");
const path = require("path");
const knex = require("./db/client");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const { render } = require("ejs");
const rootRouter = require('./routes/root')



const app = express();
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs")


// app.use(cookieParser());

// app.use((request, response, next) => {

//     const { user_name } = request.cookies
  
//     response.locals.first_name = user_name

//     next()
// })

app.use(logger("dev"));


app.get('/sign_up', (req, res) => {
    res.render('sign_up')
})


// CREATING AN ACCOUNT 
app.post('/thank_you', (request, response)=>{

    const {f_name, l_name, email, password, password_confirmation} = request.body;

    // CHECKS FOR PASSWORD CONFIRMATION IF THEY DON'T MATCH IT SENDS THEM TO SIMPLE ERROR PAGE 
    if(password === password_confirmation) {
        knex('users')
        .insert({
            first_name: f_name,
            last_name: l_name,
            email: email,
            password: password
        }, '*')
        .then(data => {
            console.log(data);
            response.render('thank_you');
        })
        .catch(console.error);
    } else {
        response.send('<h1> The password confirmation did not match, try again!</h1>')
    }
})

app.use('/', rootRouter)


const PORT = 3000;
const ADDRESS = "localhost";

app.listen(PORT, ADDRESS, () => {
	console.log(`Server listenning on http://${ADDRESS}:${PORT}`);
});
