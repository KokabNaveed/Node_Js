const path = require('path')

const directory = '/user/local';
const filename = 'test.txt';

const fullpath = path.join(directory,filename)

console.log(fullpath)