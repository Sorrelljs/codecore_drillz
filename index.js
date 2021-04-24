const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const methodOverride = require('method-override')
const { render } = require("ejs");

// Routers
const rootRouter = require('./routes/root');
const drillsRouter = require("./routes/drills");
const drillGroupsRouter = require("./routes/drill_groups");
const userRouter = require('./routes/user')

const app = express();
app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride((req, res) => {
	if (req.body && req.body._method) {
		const method = req.body._method
		delete req.body._method
		return method
	}
}))




// Routes
app.use('/', rootRouter);
app.use("/drills", drillsRouter);
app.use("/drill_groups", drillGroupsRouter);
app.use("/user", userRouter)


const PORT = 3000;
const ADDRESS = "localhost";

app.listen(PORT, ADDRESS, () => {
	console.log(`Server listenning on http://${ADDRESS}:${PORT}`);
});

module.exports = app;