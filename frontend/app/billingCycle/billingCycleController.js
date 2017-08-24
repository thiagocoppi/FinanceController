(function(){
    angular.module('financeApp')
        .controller('BillingCycleCtrl',[
            '$http',
            'msgs',
            'tabs',
            BillingCycleController
        ])

        function BillingCycleController($http, msgs, tabs){
            const vm = this
            const url = 'http://localhost:3003/api/billingCycles'
            vm.refresh = function(){                
                $http.get(url).then(function(response){
                    vm.billingCycle = {credits: [{}], debts: [{}]}
                    vm.calculateValues()
                    vm.billingCycles = response.data
                    tabs.show(vm,{tabList: true, tabCreate : true})
                })
            }

            vm.create = function(){
               $http.post(url, vm.billingCycle).then(function(response){
                   vm.refresh()
                   msgs.addSucess('Operação realizada com sucesso !')
               }, function errorCallBack(response){
                   msgs.addError('Aconteceu um erro !')
               })
            }

            vm.delete = function(){
                const deleteUrl = `${url}/${vm.billingCycle._id}`
                $http.delete(deleteUrl,vm.billingCycle).then(function (response){
                    vm.refresh()
                    msgs.addSucess('Ciclo de pagamento foi excluído !')
                }, function(response){
                    msgs.addError('Não foi possível excluir')
                })
            }

            vm.atualizar = function(){
                const updateUrl = `${url}/${vm.billingCycle._id}`
                $http.put(updateUrl,vm.billingCycle).then(function (response){
                    vm.refresh()
                    msgs.addSucess('Registro atualizado !')
                }, function(response){                    
                    msgs.addError('Erro ao atualizar o registro !')
                })

            }

            vm.showTabDelete = function(billingCycle){
                vm.billingCycle = billingCycle
                vm.calculateValues()
                tabs.show(vm,{tabDelete: true})
            }

            vm.showTabUpdate = function(billingCycle){
                vm.billingCycle = billingCycle
                vm.calculateValues()
                tabs.show(vm,{tabUpdate: true})
            }

            vm.addCredit = function(index){
                vm.billingCycle.credits.splice(index + 1,0,{})
                vm.calculateValues()
            }

            vm.cloneCredit = function(index,{name,value}){
                vm.billingCycle.credits.splice(index + 1,0,{name,value})  
                vm.calculateValues()              
            }

            vm.deleteCredit = function(index){
                if(vm.billingCycle.credits.length > 1)
                    vm.billingCycle.credits.splice(index,1)
                vm.calculateValues()
            }

            vm.addDebt = function(index){
                vm.billingCycle.debts.splice(index + 1,0,{})
                vm.calculateValues()
            }

            vm.cloneDebt = function(index,{name,value,status}){
                vm.billingCycle.debts.splice(index + 1,0,{name,value,status})
                vm.calculateValues()
            }

            vm.deleteDebt = function(index){
                if(vm.billingCycle.debts.length > 1)
                    vm.billingCycle.debts.splice(index,1)
                vm.calculateValues()
            }

            vm.calculateValues = function(){
                vm.credit = 0
                vm.debt = 0

                if(vm.billingCycle){
                    vm.billingCycle.credits.forEach(function({value}){                        
                        vm.credit+= !value || isNaN(value) ? 0 : parseFloat(value)
                    })

                    vm.billingCycle.debts.forEach(function({value}){                        
                        vm.debt+= !value || isNaN(value) ? 0 : parseFloat(value)
                    })
                }                 
                vm.total = vm.credit - vm.debt                
            }

            vm.refresh()
        }
})()