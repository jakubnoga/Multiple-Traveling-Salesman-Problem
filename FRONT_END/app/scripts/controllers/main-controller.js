'use strict';
angular.module('MTSPApp').controller('MainCtrl', function (
	uiGmapGoogleMapApi,
	$scope
	) {

	var ctrl = this;
	ctrl.drawingManagerControl = {};
	ctrl.markers=[];

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
	  $scope.$watch(
	  	function(){
	  		return ctrl.drawingManagerControl.getDrawingManager;
	  	},
	  	function(){
	  		if(ctrl.drawingManagerControl.getDrawingManager){
	  			ctrl.maps.event.addListener(ctrl.drawingManagerControl.getDrawingManager(), 'overlaycomplete', function(event) {
					  if (event.type === ctrl.maps.drawing.OverlayType.MARKER) {
					    event.overlay.getRadius();
					  }
					});
	  		}
	  },true);

  });
});
