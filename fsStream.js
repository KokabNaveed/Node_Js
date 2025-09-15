const fs = require('fs');
const readline = require('readline');

// READ STREAM

// const readableStream = fs.createReadStream('ReadFile.txt',{encoding:'utf8'})

// readableStream.on('data',(chunk)=>{
//     console.log(chunk)
// })

// readableStream.on('end',()=>{
//     console.log('Finished Reading File.')
// })

// readableStream.on('error',(err)=>{
//     console.error('Error: ',err)
// })

// WRITE STREAM

// const writableStream = fs.createWriteStream('output2.txt');

// writableStream.write('Hello Guys! ')
// writableStream.write('kokab is exciting to learn node js')

// writableStream.end()

// writableStream.on('finish',()=>{
//         console.log('Finished Writing to the File.')

// })

// PIPE STREAM for copying data

// const readableStream = fs.createReadStream('ReadFile.txt');

// const writableStream = fs.createWriteStream('ReadFile_Output.txt');

// readableStream.pipe(writableStream)

// writableStream.on('finish',()=>{
//         console.log('File Copied Successfully.')

// })

//READ LINE BY LINE

const readableStream = fs.createReadStream('ReadFile.txt');

const rl = readline.createInterface({input:readableStream});

rl.on('line',(line)=>{
        console.log('Line: ',line)
})

rl.on('close',()=>{
        console.log('Processing Done.')
})