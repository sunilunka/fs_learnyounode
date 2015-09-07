var fs = require("fs");

var buffer = "";

fs.readFile(process.argv[2], "utf-8", function(err, data){

  if(err){
    throw "An error occured: " + err + "\n Sorry about that!";
  } else {
    buffer = data;
    var newLines = buffer.split("\n").length - 1 ;
    console.log(newLines);
  }

});
 