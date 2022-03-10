///Users/mahmoodajaz/Desktop/IBM DATA SCIENCE/My codes/module2/introTonode/path.js

console.log("#####################################################################################");

let path = require("path");
console.log(path);

console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");


let extensionName = path.extname("Users/mahmoodajaz/Desktop/IBM DATA SCIENCE/My codes/module2/introTonode/path.js");
console.log(extensionName);


console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");


let baseName = path.basename("Users/mahmoodajaz/Desktop/IBM DATA SCIENCE/My codes/module2/introTonode/path.js");
console.log(baseName);

console.log(__dirname);
console.log(__filename);

let dirPath =__dirname;
console.log(dirPath);

let newFilePath = path.join(dirPath,"test.js")
console.log(newFilePath);
