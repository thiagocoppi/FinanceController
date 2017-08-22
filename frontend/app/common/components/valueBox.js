(function(){
    angular.module('financeApp')
        .component('valueBox',{
            bindings: {
                grid: '@',
                colorClass: '@',
                value: '@',
                texto: '@',
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
                <div class="{{$ctrl.gridClasses}} small-box-size">
                    <div class="small-box {{ $ctrl.colorClass }} small-box-collor">
                        <div class="inner">
                            <h3> {{ $ctrl.value }}</h3>
                            <p>{{ $ctrl.texto }}</p>
                        </div>
                <div class="icon"><i class="fa {{ $ctrl.iconClass }}"></i></div>        
                    </div>
                </div>
            ` 
        })
})()