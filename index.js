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



app.use('/', rootRouter)
app.use('/users', usersRouter)
app.use('/session', sessionRouter) 


const PORT = 3000;
const ADDRESS = "localhost";

app.listen(PORT, ADDRESS, () => {
	console.log(`Server listenning on http://${ADDRESS}:${PORT}`);
});
