'use strict';
angular
  .module('MTSPApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'uiGmapgoogle-maps',
    'ui.router'
  ])

.constant('serverURL', {
    'url': 'http://localhost'
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

.config(function($stateProvider, $urlRouterProvider) {
$urlRouterProvider.otherwise('/main');
$stateProvider
  .state('main', {
    url: '/main',
    templateUrl: 'views/main.html',
    controller: 'MainCtrl',
    controllerAs: 'mCtrl'
  }).state('library', {
    url: '/library',
    templateUrl: 'views/library.html',
    controller: 'MainCtrl',
    controllerAs: 'mCtrl'
  });
})

.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyDr7-TrRbKj1aHw7BeUhsI_6mGNTLFH0_o',
        v: '3.17',
        libraries: 'geometry,drawing'
    });
});
