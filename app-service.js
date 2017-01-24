'use strict';

myApp.factory('Globals', function() {
  return {
    myAPI : 'http://myapi.com'
  };
});

myApp.factory('PageVariables', function(){
  var pageTitle = 'AngularJS Setup';
  var bodyClass = 'home';
  return {
    pageTitle: function() { return pageTitle; },
    setTitle: function(newTitle) { pageTitle = newTitle; },
    bodyClass: function() { return bodyClass; },
    setBodyClass: function(newBodyClass) { bodyClass = newBodyClass; }
  };
});
