angular.module( 'ngBoilerplate.result', [
  'ui.router'
])
.config(function config( $stateProvider ) {
  $stateProvider.state( 'result', {
    url: '/result',
    views: {
      "main": {
        controller: 'ResultCtrl',
        controllerAs: 'rCtrl',
        templateUrl: 'result/result.tpl.html'
      }
    }
  });
})
.controller('ResultCtrl', function ResultController (
  MainService,$state,uiGmapGoogleMapApi
  ) {
  var ctrl = this;
  var data = MainService.data.received;
  if(_.isUndefined(data) || _.isNull(data)){
    $state.go('home');
  } else {

    uiGmapGoogleMapApi.then(function(maps) {
      ctrl.maps = maps;    
      ctrl.options = {scrollwheel: true};
    });  
    ctrl.map = MainService.data.map;
    
    var frontData = MainService.data.send;
    var rows = [];
    var cols = [];
    cols.push({id: "it1", label: "iteracja", type: "number"});
    var cnt = 1;
    var i;
    var j = 1;
    var times = [];
    var bestRoutes = [];
    ctrl.chartObject= {};

    _.forEach(data.bestResults,function(resultArray){
      times.push(data.elapsedTime[cnt-1]);
      bestRoutes.push(_.last(resultArray));
      if(_.isEmpty(rows)){
        for(i = 0; i<resultArray.length; i++){
          var preparedResult = {
            c: [              
              {v:j},
              {v:resultArray[i]}
            ]
          };
          j++;
          rows.push(preparedResult);
        }
      } else {
        for(i = 0; i<resultArray.length;i++){
          rows[i].c.push({v:resultArray[i]});
        }
      }      
      cols.push({id: "pw" + cnt, label: "Powtorzenie " + cnt, type: "number"});
      cnt++;
    });


    if(MainService.data.mode === 'map'){
      ctrl.mode = true;
      for(var l = 0; l<ctrl.markers.length;l++){
        var from,to;
        if(l < ctrl.markers.length-1){
          from = {
            latitude: ctrl.markers[l].coords.latitude,
            longitude: ctrl.markers[l].coords.longitude
          };
          to = {
            latitude: ctrl.markers[l+1].coords.latitude,
            longitude: ctrl.markers[l+1].coords.longitude
          };
        } else {
          from = {
            latitude: ctrl.markers[l].coords.latitude,
            longitude: ctrl.markers[l].coords.longitude
          };
          to = {
            latitude: ctrl.markers[0].coords.latitude,
            longitude: ctrl.markers[0].coords.longitude
          };
        }    
        ctrl.polylines.push({
            id: l+1,
            path: [
              from,
              to
            ],
            stroke: {
              color: '#FF0000',
              weight: 3
            },
            editable: false,
            draggable: false,
            geodesic: false,
            visible: true
          });
      }
    } else {
      ctrl.mode = false;
      ctrl.tsplib = MainService.data.tsplib;
    }
    
    
    var average = function(array){
      var sum = 0;
      var k = 0;
      _.forEach(array,function(item){
        sum +=item;
        k++;
      });
      return sum/k;
    };

    var findBestRoute = function(bestRoutes){
      var temp = bestRoutes[0];
      var index = 0;
      for(var i;i<bestRoutes.length;i++){
        if(bestRoutes[i]<temp){
          index = i;
        }
      }
      return index;
    };

    var bestRouteIndex = findBestRoute(bestRoutes);
    var bestRoute = data.bestRoute[bestRouteIndex];
    ctrl.bestRoute = bestRoute;

    ctrl.markers = bestRoute;

    ctrl.maxTime = _.max(times);
    ctrl.minTime = _.min(times);
    ctrl.avgTime = average(times);

    ctrl.maxRoute = _.max(bestRoutes);
    ctrl.minRoute = _.min(bestRoutes);
    ctrl.avgRoute = average(bestRoutes);
    ctrl.laps = data.laps;
    ctrl.polylines = []; 

    ctrl.chartObject.data = {
      "cols": cols,
      "rows": rows
    };

    ctrl.style = "height:600px; width:100%;";
    ctrl.chartObject.type = 'LineChart';
    ctrl.chartObject.options = {
        'title': 'Funkcja celu'
    };

  }

});
