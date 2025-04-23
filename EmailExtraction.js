let fs = require("fs");
let fileName = "test.txt";

let data = fs.readFileSync(fileName, "utf8");
let matchArray = data.match(/\S+@softwire.com\b/gm); 
console.log(matchArray.length);
console.log(matchArray.join('\n'));
