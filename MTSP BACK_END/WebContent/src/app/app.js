angular.module('ngBoilerplate', [
    'uiGmapgoogle-maps',
    'ui.router',
    'ngBoilerplate.home',
    'ngBoilerplate.library',
    'ngBoilerplate.result',
    'templates-app',
    'templates-common',
    'googlechart'
  ])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/main' );
})

.run( function run () {
})


.constant('serverURL', {
    'url': ''
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location,$rootScope ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    $scope.pageTitle = 'MTSP' ;
  });
  $rootScope.$on('WAIT', function (event, data) {
    $scope.wait = data;
  });
})

.config(function ($provide) {
  $provide.decorator('$q', function ($delegate) {
    var defer = $delegate.defer;
    $delegate.defer = function () {
      var deferred = defer();
      deferred.promise.success = function (fn) {
        deferred.promise.then(fn);
        return deferred.promise;
      };
      deferred.promise.error = function (fn) {
        deferred.promise.then(null, fn);
        return deferred.promise;
      };
      return deferred;
    };
    return $delegate;
  });
})

.config(function($httpProvider) {
  // Use x-www-form-urlencoded Content-Type
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

  /**
   * The workhorse; converts an object to x-www-form-urlencoded serialization.
   * @param {Object} obj
   * @return {String}
   */ 
  var param = function(obj) {
    var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

    for(name in obj) {
      value = obj[name];

      if(value instanceof Array) {
        for(i=0; i<value.length; ++i) {
          subValue = value[i];
          fullSubName = name + '[' + i + ']';
          innerObj = {};
          innerObj[fullSubName] = subValue;
          query += param(innerObj) + '&';
        }
      }
      else if(value instanceof Object) {
        for(subName in value) {
          subValue = value[subName];
          fullSubName = name + '[' + subName + ']';
          innerObj = {};
          innerObj[fullSubName] = subValue;
          query += param(innerObj) + '&';
        }
      }
      else if(value !== undefined && value !== null){
        query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
      }        
    }

    return query.length ? query.substr(0, query.length - 1) : query;
  };

  // Override $http service's default transformRequest
  $httpProvider.defaults.transformRequest = [function(data) {
    return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
  }];
})

.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyDr7-TrRbKj1aHw7BeUhsI_6mGNTLFH0_o',
        v: '3.17',
        libraries: 'geometry,drawing'
    });
});