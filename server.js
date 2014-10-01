var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist'));

app.listen(4444)
console.log("server is listening on port 3333")
