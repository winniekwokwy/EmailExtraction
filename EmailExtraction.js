let fs = require("fs");
let fileName = "test.txt";

let data = fs.readFileSync(fileName, "utf8");
//let matchArray = data.match(/^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}/gm);
let matchArray = data.match(/@[a-zA-Z0-9.-]+\.[a-zA-Z.-]+\b/gm);
//console.log(matchArray);

let dictionary = {};
if (matchArray.length >= 1) {
  matchArray.map((domain) => {
    let keys = Object.keys(dictionary);
    if (dictionary.length === 0 || keys.indexOf(domain) == -1) {
      dictionary[domain] = 1;
    } else {
      dictionary[domain] += 1;
    }
  });
}
console.log(dictionary);
const sortedDict = Object.fromEntries(
  Object.entries(dictionary).sort(([, a], [, b]) => b - a)
);
//console.log(sortedDict);

let counter = 0;

for (domain in sortedDict) {
  if (counter <= 9) {
    if (sortedDict.hasOwnProperty(domain))
      console.log(`domain: ${domain}: count: ${sortedDict[domain]}`);
    counter++;
  }
}
