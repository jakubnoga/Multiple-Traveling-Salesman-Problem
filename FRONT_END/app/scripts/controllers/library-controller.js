'use strict';
angular.module('MTSPApp').controller('LibraryCtrl', function (
	MainService
	) {
	var ctrl = this;
	ctrl.credentials = {
		bees:10,
		iterations:1000,
		neighbourhoods:5,
		neighbourhoodsFrequency:5,
		randomSolutions:10000
	};

	ctrl.prepareData = function(form, credentials){
		if (form.$valid) {
			ctrl.sendData(credentials);
    } else {
      form.submitted = true;
      console.log('invalid form');
    }		
	};

	ctrl.sendData = function(credentials){
		MainService.sendData(credentials,'tsplib');
	};


});
