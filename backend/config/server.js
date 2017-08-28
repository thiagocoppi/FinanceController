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
//transform params to int
const queryParser = require('express-query-int')
//const allowCors = require('./cors')
server.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,PATCH,DELETE')
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Credentials', true);
    next()
})
server.use(queryParser())
server.use(bodyParse.urlencoded({extended: true}))
server.use(bodyParse.json())

server.listen(port, function(){
    console.log(`BACKEND está rodando na porta ${port}`)
})

module.exports = server