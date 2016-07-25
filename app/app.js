'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
      .when("/", {
        controller: 'registerController',
        templateUrl : "register/register.html"
      })
      .otherwise({
        redirectTo : "/"
      })
});
