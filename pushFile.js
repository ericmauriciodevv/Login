const fs = require('fs')
const path = require('path')
const json = require('./database.json')

const pathJSON = path.join(__dirname, "./database.json")

const readJSON = () => {
    const data = fs.readFileSync(pathJSON, 'utf-8')
    return data

}

const writeJSON = (data) =>{
    fs.writeFileSync(pathJSON, JSON.stringify(data, null, 4), "utf-8")
}
module.exports = {writeJSON, readJSON}