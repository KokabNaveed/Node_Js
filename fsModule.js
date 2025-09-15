// read file

const fs = require('fs');

// fs.readFile('ReadFile.txt', 'utf8' , (err,data)=>{
//     if(err){
//         console.error(`Error Reading File ${err}`);
//         return;
//     }
//     console.log(`Data is ${data}`);
// })


// Write File

const content = "Hello, I am learning Node Js";

fs.writeFile('output.txt', content, (err) => {
    if (err) {
        console.error("Error Writing To file: ", err);
        return;
    }
    console.log('Written Successfully to the File')
})