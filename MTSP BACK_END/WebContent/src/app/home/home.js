angular.module( 'ngBoilerplate.home', [
  'ui.router'
])
.config(["$stateProvider", function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        controllerAs: 'mCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    }
  });
}])
.controller('HomeCtrl', ["uiGmapGoogleMapApi", "$scope", "MainService", function HomeController (
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
    normValue:2,
    randomSolutions:10000,
    salesmanDistance:2000,
    salesmen:1,
    salesmanCost:15,
    laps:1
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
            maps.drawing.OverlayType.MARKER
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
        window.alert('Nie wybrano zadnych punktow na mapie');
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
    if(_.isNull(result)){
      window.alert("zbyt duzo zapytan do mapy, zmniejsz liczbe punktow");
      return;
    }
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
    var map = ctrl.map;
    MainService.sendData(ctrl.credentials,'map',map);
  };

}])
.service('MainService', ["$http", "serverURL", "$state", "$rootScope", function (
  $http,
  serverURL,
  $state,
  $rootScope
) {

  var service = this;
  service.data = {};
  service.addCords = function(destinations, routes,i){
    _.forEach(routes,function(route){
      var index;
      index = _.findLastIndex(routes, function(item) {
        return item === i;
      });
      if(index >= 0){
        route[index].latitude = destinations.latitude;
        route[index].longitude = destinations.longitude;
      }
    });
  };


  service.sendData = function(data,mode,map){
    var url = '';
    service.data.send = data;
    service.data.map = map;
    service.data.mode = mode;
    if(mode === 'map'){
      url = 'mappoints';
      data.tsplib = 'null';
    } else if (mode === 'tsplib') {
      url = 'tsplib';
      data.distanceMatrix = [[0]];
      service.data.tsplib = data.tsplib;
      $rootScope.$emit('WAIT',true);
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
      if(mode === 'map'){
        _.forEach(resolve.bestRoute,function(route){
          for(var i = 0;i<route.length;i++){
            var point = route[i];
            route[i] = {
              title: point,
              id: point,
              coords: {
                latitude: service.data.send.destinations[point].latitude,
                longitude: service.data.send.destinations[point].longitude
              }            
            }; 
          }
        });
      } else {
        $rootScope.$emit('WAIT',false);
      }      
      service.data.received = resolve;
      $state.go('result');
    }).error(function(reason){
      $rootScope.$emit('WAIT',false);
      window.alert('Blad serwera');
    });
  };

}]);