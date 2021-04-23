const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const { render } = require("ejs");
const rootRouter = require('./routes/root')



const app = express();
app.set("view engine", "ejs")


// app.set("view engine", "ejs"); Not needed yet
// app.use(cookieParser()); Not needed yet

app.use(logger("dev"));


// app.get('/', (req, res) => {
//     res.write('<h1>Welcome</h1>')
// })

app.use('/', rootRouter)


const PORT = 3000;
const ADDRESS = "localhost";

app.listen(PORT, ADDRESS, () => {
	console.log(`Server listenning on http://${ADDRESS}:${PORT}`);
});
