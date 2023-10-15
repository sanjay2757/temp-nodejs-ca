const {readFile, writeFile, read} = require('fs')

console.log('Start')

readFile('./content/first.txt','utf-8',(err, result) =>{
    if(err) {
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt','utf8',(err, result) =>{
        if(err) {
            console.log(err)
            return
        }
        const second = result
        
        writeFile('./content/result-async.txt',`Here is the result: ${first}, ${second}`,{flag: 'a'},(err, result)=>{
            if(err) {
                console.log(err)
                return
            }
            console.log('Done with this task')
        })
    })
})

console.log('Starting next task')