const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const articles = require('./routes/article');
const newLocal = require('custom-env');
newLocal.env(process.env.NODE_ENV, './config');

mongoose.connect(process.env.CONNECTION_STRING, 
                {   useNewUrlParser: true, 
                    useUnifiedTopology: true });

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.json());

app.use('/articles', articles);


app.listen(process.env.PORT); 