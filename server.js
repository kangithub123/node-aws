var app = require('./app');
const port = process.env.port || 3000;
var server = app.listen(port, function(){
     console.log("Server is running on port 3000");
});