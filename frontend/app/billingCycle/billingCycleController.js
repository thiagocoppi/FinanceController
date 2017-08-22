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
                    vm.billingCycle = {}
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
                tabs.show(vm,{tabDelete: true})
            }

            vm.showTabUpdate = function(billingCycle){
                vm.billingCycle = billingCycle
                tabs.show(vm,{tabUpdate: true})
            }

            vm.refresh()
        }
})()