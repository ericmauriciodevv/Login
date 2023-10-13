const express = require('express')
const fs = require('fs')
const app = express()
const json = require('./database')
const {writeJSON, readJSON} =  require('./pushFile')



const port = 3000

app.get('/user/post/:user/:pw', (req,res)=>{
    const user = req.params['user']
    const pwStrign = req.params['pw']
    let pw = parseInt(pwStrign)

    const dataFiltered = json.data.filter(item => item.pw === pw)

    const info = {name: user, pw: pw}
    
    
    
    


    if(dataFiltered.length > 0 && dataFiltered[0].name === user && dataFiltered[0].pw === pw){
        res.send("data already established in the database")
    }else{
        try{
            console.log('hola')
        }catch(err){
            console.log(err)
        }

    }
})






app.get('/user/:user/:pw', (req,res)=>{
    const user = req.params['user'];
    const pwString = req.params['pw'];
    let pw = parseInt(pwString)

    const dataFiltered = json.data.filter(item => item.pw === pw && item.name === user)
    

    if(dataFiltered.length > 0 && dataFiltered[0].name === user && dataFiltered[0].pw === pw){
        res.send(dataFiltered)
    }else{
        res.status(404).send("usuario no encontrado")
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