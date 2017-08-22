(function(){
    angular.module('financeApp')
        .factory('msgs',[
            'toastr',
            MsgsFactory
        ])

    function MsgsFactory(toastr){
        function addMsg(msgs, tittle, method){
            if(msgs instanceof Array){
                msgs.forEach(msg => toastr[method](msg,tittle))
            } else {
                toastr[method](msgs,tittle)
            }
        }

        function addSucess(msgs){
            addMsg(msgs,'Sucesso','success')
        }

        function addError(msgs){
            addMsg(msgs,'Erro','error')
        }

        return { addSucess, addError }
    }
})()