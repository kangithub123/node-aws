var express = require('express');
var app = express();
app.get('/', (req, res) => res.send('Hello again from nodejs authentication server'));
module.exports = app;