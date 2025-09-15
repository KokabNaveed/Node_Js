const url = require('url')

const myurl = new URL('https://example.com:8000/path/name?query=kokab#hash')

console.log('Host: ',myurl.host)
console.log('PathName: ',myurl.pathname)
console.log('Search Param',myurl.searchParams.get('query'));