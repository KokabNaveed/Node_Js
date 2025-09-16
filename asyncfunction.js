const fs = require('fs/promises')

async function readFile() {

    try {
        const data =await fs.readFile('ReadFile.txt','utf8');
        console.log(`Data: ${data}`)
    } catch (error) {
                console.error(`Data: ${error}`)

    }

    
}

readFile();