const path = require('path')

console.log(path.sep)

const filePath = path.join('/content', 'sub-folder', 'test.txt')
console.log(filePath)

console.log(path.basename(filePath))

const absolutePath = path.resolve(__dirname, 'content', 'sub-folder', 'text.txt')

console.log(absolutePath)