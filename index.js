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
const cookieParser = require("cookie-parser");





// Routers

const drillsRouter = require("./routes/drills");
const drillGroupsRouter = require("./routes/drill_groups");

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

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));


app.use((request, response, next) => {

	console.log(request.session)
	const { user } = request.session

	response.locals.username = user && user.username

	next()
})


app.get('/reset_password', (request, response)=> {
	response.render('reset_password')
})

app.get('/password_confirm', (request, response)=> {
	response.render('password_confirm')
})





// Routes
app.use('/', rootRouter);
app.use("/drills", drillsRouter);
app.use("/drill_groups", drillGroupsRouter);
app.use('/users', usersRouter)
app.use('/session', sessionRouter) 



const PORT = 3000;
const ADDRESS = "localhost";

app.listen(PORT, ADDRESS, () => {
	console.log(`Server listenning on http://${ADDRESS}:${PORT}`);
});

module.exports = app;