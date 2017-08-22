const _ = require('lodash')
const BillingCycle = require('../billingCycle/billingCycle')

/**
 * Middleware function to get payment cycles at billing cycles
 * @author Thiago Coppi
 * @param req Requisition 
 * @param res JSON error or results
 */
//Function Middleware
function getSummary(req,res){
    BillingCycle.aggregate({
        //Sum at arrays of credits with sum
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}}        
    },{
        //Grouping and sum all credits and debts
        $group: {_id: null,credit: {$sum: "$credit"},debt: {$sum : "$debt"}}        
    },{
        $project: {_id: 0, credit: 1, debt: 1}
    }, function(error,result){
        //Validate an error in summary service        
        if(error){
            res.status(500).json({errors : [error]})
        } else { 
            res.json(_.defaults(result[0],{
                credit: 0,
                debt : 0
            }))
        }
    })
}

module.exports = { getSummary }
    