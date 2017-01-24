'use strict';

var myApp = angular.module('myApp', ['ngRoute']);

// ALL ROUTE CONFIGURATIONS
myApp.config(function($routeProvider, $locationProvider) {

  $routeProvider
  .when('/', { // default routes to home
    templateUrl : 'home/home.html',
    controller: 'homeController'
  })
  .otherwise({redirectTo: '/'});
});

// CONFIGURATIONS TO ALLOW CROSS-ORIGIN RESOURCE SHARING (CORS) REQUESTS
// myApp.config(['$httpProvider', function($httpProvider) {
//   $httpProvider.defaults.useXDomain = true;
//   $httpProvider.defaults.withCredentials = true;
//   delete $httpProvider.defaults.headers.common["X-Requested-With"];
//   $httpProvider.defaults.headers.common["Accept"] = "application/json";
//   $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
// }
// ]);

// myApp.config(function (localStorageServiceProvider) {
//   localStorageServiceProvider
//   .setPrefix('')
//   .setNotify(true, true)
// });
