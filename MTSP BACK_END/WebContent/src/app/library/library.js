angular.module( 'ngBoilerplate.library', [
  'ui.router'
])
.config(function config( $stateProvider ) {
  $stateProvider.state( 'library', {
    url: '/library',
    views: {
      "main": {
        controller: 'LibraryCtrl',
        controllerAs: 'mCtrl',
        templateUrl: 'library/library.tpl.html'
      }
    }
  });
})
.controller('LibraryCtrl', function LibraryController (
  MainService
  ) {
  var ctrl = this;
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
