//Import schemas 
const Contact = require('./contact')

//Create service to post a mensage contact
Contact.methods(['get','post'])

module.exports = Contact