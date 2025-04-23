let fs = require("fs");
let fileName = "test.txt";

let data = fs.readFileSync(fileName, "utf8");
let matchArray = data.match(/\S\w\D\S*@softwire.com\W\S\w/gm); 
console.log(matchArray.length);
console.log(matchArray);
