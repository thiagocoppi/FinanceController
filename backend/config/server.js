/**
 * @author Thiago Coppi
 * @const port are running 3003
 * This method is a function to connect at integrate express in port 
 */
//Porta que rodará o servidor
const port = 3003
//Interpretador da requisição
const bodyParse = require('body-parser')
//Middleware
const express = require('express')
const server = express();

server.use(bodyParse.urlencoded({extended: true}))
server.use(bodyParse.json())

server.listen(port, function(){
    console.log(`BACKEND está rodando na porta ${port}`)
})

module.exports = server