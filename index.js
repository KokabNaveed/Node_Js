const sayHello = require("./greetings")
const math = require("./math") 

message = sayHello('Kokab')
console.log(message)

addResult = math.add(5,3);

subResult = math.subtract(5,3);

console.log(`Addition Result is ${addResult}`)
console.log(`Subtraction Result is ${subResult}`)
