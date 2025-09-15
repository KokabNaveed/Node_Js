const EventEmitter = require('events')

const emitter = new EventEmitter()

// registering an event

emitter.on('test1',()=>{
    console.log('An event occured')
})


emitter.on('error',(err)=>{
    console.error('Event Error: ',err.message)
})

try {
    emitter.emit('test1')
    emitter.removeListener('test1')
    emitter.emit('test1')
} catch (error) {
    emitter.emit('error',error)
}
