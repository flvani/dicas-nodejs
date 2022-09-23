const path = require('path')

// Basename
console.log(path.basename(__filename))

// Diretorio
console.log(path.dirname(__filename))

console.log(path.join(__dirname, 'teste', 'teste.html'))
