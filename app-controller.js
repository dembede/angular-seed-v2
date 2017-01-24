'use strict';

myApp.controller('mainController', function($scope, Globals, PageVariables){
  $scope.pageVars = PageVariables;
  $scope.pageTitle = $scope.pageVars.pageTitle;
});
