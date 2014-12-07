'use strict';
angular.module('MTSPApp').service('MainService', function (
	$http,
	serverURL
) {

	var service = this;

	service.sendDistanceMatrix = function(matrix){
		return $http({
			method:'POST',
			url: serverURL.url,
			data: matrix
		}).success(function(){
			console.log('ok');
		}).error(function(){
			console.log('not ok');
		});
	};
});