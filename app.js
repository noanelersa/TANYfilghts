const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const homePage = require('./routes/homePage');
const newLocal = require('custom-env');
newLocal.env(process.env.NODE_ENV, './config');

mongoose.connect(process.env.CONNECTION_STRING, 
                {   useNewUrlParser: true, 
                    useUnifiedTopology: true });

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.json());
app.set("view engine", "ejs");
const session = require('express-session');
app.use(session({
    secret: 'login',
    saveUninitialized: false,
    resave: false
}));
app.use("/",require("./routes/login"));
app.use('/flight', require('./routes/flight'));
app.use("/user",require("./routes/user"));
app.use("/airport",require("./routes/airport"));
app.use(express.static("public"));
app.use(express.static("img"));


app.listen(process.env.PORT);