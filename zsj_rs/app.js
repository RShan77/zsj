var express = require('express');
var path = require('path');
var ejs = require('ejs');
var index = require('./routes/index');
var users = require('./routes/users');
var app = express();

// view engine setup
//设置模板文件的存储位置
app.set('views', path.join(__dirname, 'views'));
//设置模板引擎
// app.set('view engine', 'jade');
// app.engine('html',ejs.__express);
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);
app.use('/users', users);
module.exports = app;
