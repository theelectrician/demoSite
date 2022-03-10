let fs =require("fs");
console.log(fs);

let path = require("path");


// C-Create

let filePath = path.join(__dirname,"file.txt");
console.log(filePath);

fs.writeFileSync(filePath, "am i not!!");

//R-Read

let content =fs.readFileSync(filePath);
console.log(content);


// U-Update

fs.appendFileSync(filePath,"\nYes you are");
fs.appendFileSync(filePath,"Yes you are");


//D-delete

fs.unlinkSync(filePath);