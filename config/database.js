const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/db_finance',{
    useMongoClient: true,
    this:mongoose.Promise = require('bluebird')
})