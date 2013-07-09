var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var filename = "index.html";

app.get('/', function(request, response) {

fs.readFile(filename, function(err, data) {

        if (err instanceof Error) {
                console.log("Error opening + " + filename);
		response.send("Can't find index.html<br />\n");  
      } else {
                msg = new Buffer(data);
                /* console.log(data.toString()); */
		 //response.send(msg); 


	response.setHeader("Content-Type", "text/html");

	response.send(msg);


        }
});

 //response.send('Hello World 2!'); 

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
