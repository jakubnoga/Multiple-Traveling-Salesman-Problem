'use strict';
angular.module('MTSPApp').service('MainService', function (
	$http,
	serverURL
) {

	var service = this;

	service.sendData = function(data,mode){
		var url = '';
		if(mode === 'map'){
			url = 'mappoints';
			data.tsplib = "null";
		} else if (mode === 'tsplib') {
			url = 'tsplib';
			data.distanceMatrix = [[0]];
		} else {
			console.log('Unknown mode. STOP');
			return;
		}
		return $http({
			method:'POST',
			url: serverURL.url + url,
			data: 'data=' + JSON.stringify(data),
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}).success(function(resolve){
			window.alert('SUKCES, dane w konsoli');
			console.log(resolve);
		}).error(function(reason){
			window.alert('BŁĄD, dane w konsoli');
			console.log(reason);
		});
	};
});