'use strict';
angular.module('MTSPApp').directive('numberValidate', function (
) {
	return {
    require: 'ngModel',
    restrict: 'A',
    link: function(scope, ele, attrs, model) {

	   	model.$parsers.unshift(function() {
	   		if(model.$error.required){
	   			return model.$viewValue;
	   		}
	   		var value = model.$viewValue;
	   		if(!model.$error.number){
	   			model.$setValidity('negative', value >= 0);
	   			return value >= 0 ? value : undefined;
	   		} else {
	   			model.$setValidity('negative', true);
	   			return value;
	   		}        
      });

    }
  };
});