const fs = require('fs')
const path = require('path')
const database = require('./database.json')



const pathJSON = path.join(__dirname, "./database.json")

const readJSON = () => {
    const data = fs.readFileSync(pathJSON, "utf-8")
    return JSON.parse(data)
}

const writeJSON = (data) =>{
    fs.writeFileSync(pathJSON, data)
}
module.exports = {writeJSON}