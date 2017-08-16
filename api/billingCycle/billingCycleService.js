const BillingCycle = require('./billingCycle')

//Create REST services with parameter informed
BillingCycle.methods(['get','set','post','delete'])

//Exports module service to payment
module.exports = BillingCycle