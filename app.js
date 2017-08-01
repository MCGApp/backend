const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const index = require('./routes/index');

const POST = './routes/API/POST/';
const GET = './routes/API/GET/';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/api/news', require(GET + 'news'));

app.use(function (req, res, next) {
    res.json({
        message: 'endpoint not found. if you want to learn more check out https://github.com/MCGApp',
        error: 404
    })
});

app.use(function (err, req, res, next) {
    res.json({
        message: 'thats an error. if you want to learn more check out https://github.com/MCGApp',
        error: err.status
    })
});

module.exports = app;
