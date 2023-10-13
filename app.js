const express = require('express')
const fs = require('fs')
const app = express()
const json = require('./database')
const { parseArgs } = require('util')
 

const port = 3000

app.get('/user/post/:user/:pw', (req,res)=>{
    const user = req.params['user']
    const pwStrign = req.params['pw']
    let pw = parseInt(pwStrign)

    const dataFIltered = json.data.filter(item => item.pw === pw)
    const data = { name: user, pw: pw}
    const dataString = toString(data)


    if(dataFIltered[0].name === user && dataFIltered[0].pw === pw){
        res.send("data already established in the database")
    }else{


        try{
            fs.writeFileSync('./database', dataString)
            console.log("File has been sended")
        }catch(err){
            console.log(err)
        }

    }
})








app.get('/user/:user/:pw', (req,res)=>{
    const user = req.params['user']
    const pwString = req.params['pw']
    let pw = parseInt(pwString)

    const dataFIltered = json.data.filter(item => item.pw === pw && item.name === user)

    if(dataFIltered[0].name === user && dataFIltered[0].pw === pw){
        res.send(dataFIltered)
        console.log('loged')
    }else{
        res.send("User didin't founded")
        console.log("User didin't founded cause: ", dataFIltered[0].name)
    }
})

//vamos a hacer un filter que pase y revise que sus componentes sean iguales a los datos de la base de datos







app.get('/', (req,res)=>{
    res.send("first sign in")
    console.log(json.data)
})

app.listen(port, ()=>{
    console.log("Port: ", port)
})