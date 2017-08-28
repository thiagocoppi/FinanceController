(function(){
    angular.module('financeApp')
        .config([
            '$stateProvider',
            '$urlRouterProvider',
            function($stateProvider,$urlRouterProvider){
                $stateProvider
                    //Dashboard
                    .state('dashboard', {
                        url: "/dashboard",
                        templateUrl: "dashboard/dashboard.html"
                    })       
                    //Billing Cycle
                    .state('billingcycle',{
                        url: "/billingcycle?page",
                        templateUrl: "billingCycle/tabs.html"
                    })
                $urlRouterProvider.otherwise('/dashboard')
            }
        ])
})()