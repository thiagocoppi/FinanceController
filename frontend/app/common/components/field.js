(function(){
    angular.module('financeApp')
        .component('field',{
            bindings: {
                id : '@',
                label: '@',
                grid: '@',
                placeholder: '@',
                type: '@',
                model: '=',
                readonly: '<',
            },
            controller: [
                '$attrs',
                'gridSystem', 
                function($attrs,gridSystem){                
                    this.gridClasses = gridSystem.toCssClasses($attrs.grid);
                }
            ],
            template: `
                <div class="{{ $ctrl.gridClasses }}">
                    <div class="form-group">
                        <label for ="{{ $ctrl.id }}">{{ $ctrl.label }}</label>  
                        <input id = "{{ $ctrl.id }}" class="form-control" placeholder="{{ $ctrl.placeholder }}" 
                         type = "{{ $ctrl.type }}" ng-model ="$ctrl.model" ng-readonly = "$ctrl.readonly"/>
                    </div> 
                </div>
            `
        })
})()