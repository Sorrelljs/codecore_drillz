const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const { render } = require("ejs");

// Routers
const rootRouter = require('./routes/root');
const drillsRouter = require("./routes/drills");
const drillGroupsRouter = require("./routes/drill_groups");

const app = express();
app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.get('/sign_up', (req, res) => {
    res.render('sign_up')
})


// Routes
app.use('/', rootRouter);
app.use("/drills", drillsRouter);
app.use("/drill_groups", drillGroupsRouter);


const PORT = 3000;
const ADDRESS = "localhost";

app.listen(PORT, ADDRESS, () => {
	console.log(`Server listenning on http://${ADDRESS}:${PORT}`);
});

module.exports = app;