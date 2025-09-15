const sayHello = require("./greetings")
const math = require("./math") 

message = sayHello('Kokab')
console.log(message)

addResult = math.add(5,3);

subResult = math.subtract(5,3);

console.log(`Addition Result is ${addResult}`)
console.log(`Subtraction Result is ${subResult}`)

const lodash = require('lodash')


const numbers = [1,2,3,4,5]
const reversed = lodash.reverse(numbers)

console.log(reversed);