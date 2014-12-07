'use strict';
angular.module('MTSPApp').controller('MainCtrl', function (
	uiGmapGoogleMapApi,
	$scope
	//MainService
	) {

	var ctrl = this;
	ctrl.drawingManagerControl = {};
	ctrl.credentials = {};
	ctrl.markers=[];
	var id=1;

	uiGmapGoogleMapApi.then(function(maps) {
		ctrl.maps= maps;
		ctrl.map = {
	  	center: {latitude: 52.335339071889386, longitude: 19.1162109375 }, 
	  	zoom: 6, 
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
				  	ctrl.maps.event.addListener(marker, 'click', deleteMarker);
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
  	}, function(matrix){
  		ctrl.matrix = matrix;
  	});
	};

	ctrl.deleteMarker = function(event){
		var a;
		a = event;
	};

	ctrl.sendData = function(form,credentials){
    if (form.$valid) {
      ctrl.distanceMatrix();
      console.log(credentials);
		// MainService.sendDistanceMatrix(matrix, credentials)
		// 	.then(function(){
		// 		//do something
		// });
    } else {
      form.submitted = true;
      console.log('invalid form');
    }
	};

});
