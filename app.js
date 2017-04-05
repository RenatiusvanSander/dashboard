'use strict';

// Declare app level module which depends on views, and components
var dashboardApp = angular.module('dashboardApp', ['ngRoute']);
//configure hyperlinks behaviour
/*.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
 //configure hyperlinks the prefix
 $locationProvider.hashPrefix('!');

 //Sets route definition that will be used on route change when no other route definition is matched.
 $routeProvider.otherwise({redirectTo: '/view1'});
 }]);*/
