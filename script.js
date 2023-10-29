const express = require("express");
const indexRouter = require("./Routes/index");
const aboutRouter = require("./Routes/about");
const contactRouter = require("./Routes/contact");
const signupRouter = require("./Routes/signup");
const path = require('path')
const app = express();

// to parse the form data that we get in req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public/styles')))

app.use("/", indexRouter);
app.use("/about", aboutRouter);
app.use("/contact", contactRouter);
app.use("/signup", signupRouter);

const port = process.env.port || 3000;
app.listen(port, () => console.log("server started at:", port));
