const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const homePage = require('./routes/homePage');

mongoose.connect('mongodb+srv://alicemager006:k8SQCfD1JAibNFNE@cluster0.t3ryxdl.mongodb.net/?retryWrites=true&w=majority',
                {   useNewUrlParser: true, 
                    useUnifiedTopology: true });

var app = express();
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
app.use("/user",require("./routes/user"));
app.use(express.static("public"));
app.use(express.static("img"));


app.listen(8081);

