var express = require('express');
var path = require('path');
var http = require('http');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

/* mongodb */
var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;

var mongoclient = new MongoClient(new Server('127.0.0.1',27017,{'native_parser':true}));
var db = mongoclient.db('mydb');

app.get('/', function(req, res) {
   db.collection('things').find({}).toArray(function(err, doc){
       if(err) throw err;
       res.send("myCallback(" + JSON.stringify(doc) + ");");
       for (i = 0; i < doc.length; i++) {
           console.log(doc[i].city);
       }
   });
});

app.get('/write/:_idx/:_name/:_email/:contents', function(req, res) {
  var data = {
    "write" : {
      "_idx" : req.params._idx,
      "_name" : req.params._name,
      "_email" : req.params._email,
      "contents" : req.params.contents
    }
  };
  // var xData = req.body.x;
  // var jData = req.body.j;
  // var document = {city:req.params.datas};
  // var data = "{'_idx:'" + req.params._idx + "',_name:'" + req.params._name + "',contents:'" + req.params.contents + "'}";
  // var data = '{"_idx"' + ":" + '"test"}';
  db.collection('things').insert([{_idx:req.params._idx, _name:req.params._name, _email:req.params._email, contents:req.params.contents}], function(err, doc){
    console.log("doc[0]_idx: " + doc[0]._idx + ", doc[0]_name: " + doc[0]._name + ", doc[0]_email: " + doc[0]._email + ", doc[0]contents: " + doc[0].contents);
  });
  res.send("myCallback(" + JSON.stringify(data) + ");");
  // var texxxt = JSON.parse(data);
  // texxxt = eval(texxxt);
  // console.log("//////::::::" + data);
  // console.log(typeof(texxxt));
  // res.setHeader('Content-Type', 'application/json');
  // texxxt = JSON.stringify(texxxt);
  // texxxt = eval(texxxt);
  // console.log("eval + " + typeof(texxxt));
  // data = JSON.stringify(data);
  // data = eval(data);
  // res.send(data);

  // res.send(texxxt);
  // // console.log(req.url);
  // var idx = req.url.split("/");
  // console.log("_id: " + idx)
  // db.collection('things').insert([{_id:idx[2], _name:idx[3], contents:idx[4]}], function(err, doc){
  //   // console.log("Record added as id: " + doc[0]._id + ", name: " + doc[0]._name + ", contents: " + doc[0].contents);
  //   // var jsonType = eval("{ 'name' : '" + doc[0].city + "' }");
  //   // console.log(jsonType);
  //   var jsontext_id = '{_id:"' + doc[0]._id + '"}';
  //   var jsontext_name = '{_name:"' + doc[0]._name + '"}';
  //   var jsontext_contents = '{contents:"' + doc[0].contents + '"}';
    
  //   // var jsontext = {name:doc[0].city};
  //   // var jsontext = '"name":"seoul"';
  //   var jsonType = JSON.stringify(jsontext_id + jsontext_name + jsontext_contents);
  //   // console.log(typeof(jsonType));
  //   // var accountObj = {
  //   //   "name":"John",
  //   //   "members":["Sam", "Smith"],
  //   //   "number":12345,
  //   //   "location":"Seoul"
  //   // }
  //   //   var accountStr = JSON.stringify(eval(accountObj));
  //   //   console.log(typeof(accountStr));
  //   res.setHeader('Access-Control-Allow-Origin', '*');
  //   // res.setHeader(200, {'Content-Type': 'application/json'});
    

  //   res.send(eval(jsonType));
  // });

  // db.collection('things').insert({x:4},function(err,doc){
  //      console.log('inserted '+doc[0]._id+':'+doc[0].x);
  //      res.send(doc);
  //  });
});

mongoclient.open(function(err, mongoclient) {
    if(err) throw err;
    console.log('mongo client connected');
    http.createServer(app).listen(app.get('3000'), function(){
        console.log('Express server listening on port ' + app.get('port'));
    });
 
});


/* mysql */
// var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host    :'127.0.0.1',
//     port : 3306,
//     user : 'root',
//     password : 'sV4vygfcbbia',
//     database:'test'
// });

// connection.connect(function(err) {
//     if (err) {
//         console.error('mysql connection error');
//         console.error(err);
//         throw err;
//     }
// });

var routes = require('./routes/index');
var users = require('./routes/users');
var memoData = require('./routes/memoData');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// app.get('/memo/:data', memoData.send);
// app.post('/memo', memoData.receive);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;