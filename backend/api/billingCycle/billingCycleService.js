/**
 * @author Thiago Coppi
 * This return services using documents from billing cycle
 */
const BillingCycle = require('./billingCycle')
const _ = require('lodash')

//Create REST services with parameter informed
BillingCycle.methods(['get','put','post','delete'])
//When update an register return new object and check to validate keys in register update
BillingCycle.updateOptions({new: true, runValidators: true})

//Creating new route to count register in db
BillingCycle.route('count',function(req,res,next){
    BillingCycle.count(function(error,value){
        //Check for error
        if(error){
            res.status(500).json({errors:[error]})
        } else {
            res.json({value})
        }
    })
})
//Exports module service to payment
module.exports = BillingCycle