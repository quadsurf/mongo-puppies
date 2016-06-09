var express = require("express"),
  app = express(),
  methodOverride = require("method-override"),
  morgan = require("morgan"),
  bodyParser = require("body-parser")

require("locus");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));

app.get("/", function(req, res){
	res.render("index")
});

app.listen(3000, function(){
  console.log("Server is listening on port 3000");
});
