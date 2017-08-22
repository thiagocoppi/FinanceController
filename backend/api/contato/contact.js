const restful = require('node-restful')
const mongoose = restful.mongoose

//Schema to contact 
const contactSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    email: { type: String, min: 0, required: true },
    mensagem: { type: String, required: true}
})

module.exports = restful.model('Contact', contactSchema)