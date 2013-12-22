/*
 * Module Dependencies
 */

var express = require('express'),
    routes = require('./routes'),
    socketio = require('./lib/sockets'),
    app = express(),
    http = require('http'),
	  path = require('path');

// Set environment
app.set('port', process.argv[2] || 4000);
app.use('/public', express.static(__dirname + '/public'));  
app.use(express.bodyParser());

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});