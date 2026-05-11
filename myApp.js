let express = require('express');
let app = express();

console.log("Hello World");
require('dotenv').config()

app.use("/public", express.static(__dirname + "/public"));
app.get("/json", function(req, res) {
//res.sendFile (__dirname + "/views/index.html");
//res.json({
  if (process.env.MESSAGE_STYLE==="uppercase"){
    res.json({"message": "HELLO JSON"});
  }else{
    res.json({"message": "Hello json"});
  }
  });
//});
































 module.exports = app;
