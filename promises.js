// Using Promise

//  promise is better and cleaner than callback


const fs = require('fs').promises


// read file

// fs.readFile('output.txt', 'utf8')
//     .then(data => console.log(`Data: ${data}`))
//     .catch(err => console.error(`Error: ${err}`))


// write file
const data = "I am Kokab passionate about learning Node Js"

fs.writeFile('output3.txt', data)
    .then(console.log("Written Successfully"))
    .catch(err => console.error(`Error: ${err}`))
