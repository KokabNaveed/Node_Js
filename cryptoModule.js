const crypto =  require('crypto');

const hash = crypto.createHash('sha256')
hash.update('Hello! Kokab Is Learning NodeJS')

console.log(hash.digest('hex'))