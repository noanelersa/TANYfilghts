const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const homePage = require('./routes/homePage');
const newLocal = require('custom-env');

mongoose.connect("mongodb+srv://alicemager006:k8SQCfD1JAibNFNE@cluster0.t3ryxdl.mongodb.net/?retryWrites=true&w=majority",
    {useNewUrlParser: true,
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
app.use("/admin",require("./routes/admin"));
app.use(express.static("public"));
app.use(express.static("img"));
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
    socket.broadcast.emit('joined', '');

    socket.on('disconnect', () => {
        socket.broadcast.emit('disconnected', '');
    });

    socket.on('new message', (data) => {
        const { username, message } = data;
        io.emit('new message', { username, message });
    });
});

http.listen(8081)