/**
 * @author Thiago Coppi
 * @param Database with name db_finance
 * @return This return a connection from localhost database or error message
 *  
 */
const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/db_finance',{
    useMongoClient: true,
    this:mongoose.Promise = require('bluebird')
})
//Global mensage for error 
mongoose.Error.messages.general.required = "'{PATH}' is field required"