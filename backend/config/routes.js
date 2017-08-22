/**
 * @author Thiago Coppi
 * @return routers get/set/post/delete using /billingCycles
 */
const express = require('express')

module.exports = function(server){
    //Routing API Routes
    const router = express.Router()
    //Every when calling /api this router will call
    server.use('/api',router)

    //Routes API
    const billingCycleService = require('../api/billingCycle/billingCycleService')
    billingCycleService.register(router, '/billingCycles')

    const billingSummaryService = require('../api/billingSummary/billingSummaryService')
    router.route('/billingSummary').get(billingSummaryService.getSummary)

    const contactService = require('../api/contato/contactService')
    contactService.register(router,'/contact')
}