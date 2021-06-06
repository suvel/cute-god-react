const fs = require('fs')

const dir = '../asset/img'
const files = fs.readdirSync(dir)

for (const file of files) {
    console.log(
        `import ${file.split('.')[0]} from ../asset/img/${file}`
    )
}