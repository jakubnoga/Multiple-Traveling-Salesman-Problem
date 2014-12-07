'use strict';
angular.module('MTSPApp').controller('MainCtrl', function (
	uiGmapGoogleMapApi,
	$scope,
	MainService
	) {

	var ctrl = this;
	ctrl.drawingManagerControl = {};
	ctrl.markers=[];
	var id=1;

	uiGmapGoogleMapApi.then(function(maps) {
		ctrl.maps= maps;
		ctrl.map = {
	  	center: {latitude: 40.1451, longitude: -99.6680 }, 
	  	zoom: 4, 
	  	bounds: {}
	  };
	  ctrl.options = {scrollwheel: true};
	  ctrl.drawingManagerOptions = {
	    drawingMode: maps.drawing.OverlayType.MARKER,
	    drawingControl: true,
	    drawingControlOptions: {
	      position: maps.ControlPosition.TOP_CENTER,
	        drawingModes: [
	          maps.drawing.OverlayType.MARKER,
	        ]
	    }
	  };	  
  });

  $scope.$watch(
  	function(){
  		return ctrl.drawingManagerControl.getDrawingManager;
  	},
  	function(){
  		if(ctrl.drawingManagerControl.getDrawingManager){
  			ctrl.maps.event.addListener(ctrl.drawingManagerControl.getDrawingManager(), 'overlaycomplete', function(event) {
				  if (event.type === ctrl.maps.drawing.OverlayType.MARKER) {
				  	var marker = event.overlay.position;
				  	marker.id = id;
				  	id+=1;
				    ctrl.markers.push(marker);
				  }
				});
  	}
	},true);

	ctrl.distanceMatrix = function(){
		var service = new ctrl.maps.DistanceMatrixService();
		service.getDistanceMatrix(
  	{
	    origins: ctrl.markers,
	    destinations: ctrl.markers,
	    travelMode: ctrl.maps.TravelMode.DRIVING,
    	unitSystem: ctrl.maps.UnitSystem.METRIC ,
	    durationInTraffic: true,
	    avoidHighways: false,
	    avoidTolls: false
  	}, sendDistanceMatrix);
	};

	function sendDistanceMatrix(matrix){
		//MOCK
		//nic nie robi można sobie podejrzeć jak wygląda ta macierz
		// var cMatrix;
		// cMatrix = matrix;

		MainService.sendDistanceMatrix(matrix)
			.then(function(){
				//do something
		});
	}


});
