const restful = require('node-restful')
const mongoose = restful.mongoose

//Creating credit schema
const creditSchema = new mongoose.Schema({
    name:  { type: String, required: true},
    value: { type: Number, min: 0, required: true}
})

//Creating debit schema
const debtSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    value: { type: Number, min: 0, required: true },
    status: { type: String, required: false, uppercase: true,
        enum: ['PAGO','PENDENTE','AGENDADO'] }
})

//Creating payment schema
const billingCycleSchema = new mongoose.Schema({
    name:  { type: String, required: true},
    month: { type: Number, min: 1, max: 12, required: true},
    year:  { type: Number, min: 1970, max: 2100, required: true},
    credits: [creditSchema],
    debts: [debtSchema]
})

module.exports = restful.model('BillingCycle', billingCycleSchema)

