const express = require("express");
const path = require("path");
const knex = require("./db/client");
const session = require('express-session')
const methodOverride = require('method-override')
const logger = require("morgan");
const { render } = require("ejs");
const rootRouter = require('./routes/root')
const usersRouter = require('./routes/users')
const sessionRouter = require('./routes/session')



const app = express();
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs")



app.use(logger("dev"));

app.use(methodOverride((request, response) => {
	if (request.body && request.body._method) {
	  const method = request.body._method
  
	  delete request.body._method

	  return method
	}
  }))


app.use(session({
	name: 'user', 
  
	
	secret: 'secret_key', 
  
	resave: false, 
	saveUninitialized: false, 
  
	cookie: { secure: false },
}))

app.use((request, response, next) => {

	console.log(request.session)
	const { user } = request.session

	response.locals.username = user && user.username

	next()
})


app.use('/', rootRouter)
app.use('/users', usersRouter)
app.use('/session', sessionRouter) 


const PORT = 3000;
const ADDRESS = "localhost";

app.listen(PORT, ADDRESS, () => {
	console.log(`Server listenning on http://${ADDRESS}:${PORT}`);
});
