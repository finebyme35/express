const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cors = require('cors');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;


var app = express();

// view engine setup
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname + '../public')));


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



var config = require('./config');

var url = config.mongoUrl;
var connect = mongoose.connect(url, {
  useNewUrlParser: true
});

connect.then((db) => {
  console.log("Connected correctly to server");
}, (err) => { console.log(err); });

require('./routes/userRouter')(app);
require('./routes/productRouter')(app);
require('./routes/companyRouter')(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});
app.listen(3001,() => {
    console.log("app listening on port 3001")
})
module.exports = app;