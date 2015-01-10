'use strict';
angular.module('MTSPApp').controller('MainCtrl', function (
	uiGmapGoogleMapApi,
	$scope,
	// $q
	MainService
	) {

	var ctrl = this;
	ctrl.drawingManagerControl = {};
	ctrl.credentials = {
		bees:10,
		iterations:1000,
		neighbourhoods:5,
		neighbourhoodsFrequency:5,
		randomSolutions:10000
	};
	ctrl.markers=[];
	ctrl.map = {
	  center: {latitude: 52.335339071889386, longitude: 19.1162109375 }, 
	  zoom: 6, 
	  bounds: {}
	};
	var id=1;
	var distanceMatrix=[];
	var destinations = [];
	var dI=0;	

	uiGmapGoogleMapApi.then(function(maps) {
		ctrl.maps= maps;		
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

	ctrl.prepareData = function(form, credentials){
		if (form.$valid) {
    	if(ctrl.markers.length === 0){
    		window.alert('Nie wybrano żadnych punktów na mapie');
    	} else {
  			ctrl.credentials = credentials;
  			distanceMatrix = [];
  			dI=0;
  			destinations = [];
				getRow();
    	}
    } else {
      form.submitted = true;
      console.log('invalid form');
    }		
	};

	var getRow = function(){
		if(dI<ctrl.markers.length){		
			var service = new ctrl.maps.DistanceMatrixService();
			service.getDistanceMatrix({
		    origins: [ctrl.markers[dI]],
		    destinations: ctrl.markers,
		    travelMode: ctrl.maps.TravelMode.DRIVING,
		  	unitSystem: ctrl.maps.UnitSystem.METRIC ,
		    durationInTraffic: true,
		    avoidHighways: false,
		    avoidTolls: false
			}, addRow);			
		} else {
			ctrl.sendData();
		}
	};

	var addRow = function(result){		
		if(_.isEmpty(destinations)){
			for(var j = 0; j<result.destinationAddresses.length;j++){
				destinations[j] = {
					longitude: ctrl.markers[j].C,
					latitude: ctrl.markers[j].k,
					address: result.destinationAddresses[j]
				};
			}
		}
		ctrl.destinations = destinations;
		var row = [];
		_.each(result.rows[0].elements, function(element){
			row.push(element.distance.value);
		});
		distanceMatrix.push(row);
		dI+=1;
		getRow();
	};

	ctrl.sendData = function(){
		ctrl.credentials.destinations = ctrl.destinations;
		ctrl.credentials.distanceMatrix = distanceMatrix;
		MainService.sendData(ctrl.credentials,'map');
	};

});
