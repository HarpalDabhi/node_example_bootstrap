const fs = require('fs');

console.log(fs.readFile('sentence.txt', 'utf8',(err,date)=>{
    console.log(err??date);
}));

const buffer = fs.readFileSync('sentence.txt');
console.log(buffer.toString());

fs.writeFile("pratap.txt","Maharana pratap was king of mewad",()=>{
    console.log("File wrote");
});

console.log("Done work");