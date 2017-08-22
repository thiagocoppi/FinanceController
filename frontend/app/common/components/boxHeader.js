(function(){
    angular.module('financeApp')
        .component('boxHeader',{
            bindings: {
                grid: '@',
                text: '@',
                iconClass: '@',
            },
            controller: [
                '$attrs',
                'gridSystem',
                function($attrs,gridSystem){                
                    this.gridClasses = gridSystem.toCssClasses($attrs.grid);
                }
            ],
            template: `            
                <div class = "{{$ctrl.gridClasses}}">
                    <div class = "box box-header with-border">
                        <i class = "fa {{$ctrl.iconClass}}"></i><h3 class = "box-title">{{$ctrl.text}}</h3>
                    </div>
                </div
            `
        })
})()

