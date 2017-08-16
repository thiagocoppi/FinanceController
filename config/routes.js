const express = require('express')

module.exports = function(server){
    //Routing API Routes
    const router = express.Router()
    //Every when calling /api this router will call
    server.use('/api',router)

    //Routes API
    const billingCycleService = require('../api/billingCycle/billingCycleService')
    billingCycleService.register(router, '/billingCycles')
}