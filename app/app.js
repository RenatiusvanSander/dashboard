'use strict';
/**
 * A utility to manage the inventory-item-database
 * It views all entries. It is able to delete an inventory-item.
 * It creates an inventory-item by your definition.
 *
 * @class dashboard
 * @constructor
 * @Param dashboardApp
 * @Param ngRoute
 * @required
 */
// Declare app level module which depends on views, and components
  var dashboardApp = angular.module('dashboardApp', ['ngRoute']);
//configure hyperlinks behaviour
  /*.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
   //configure hyperlinks the prefix
   $locationProvider.hashPrefix('!');

   //Sets route definition that will be used on route change when no other route definition is matched.
   $routeProvider.otherwise({redirectTo: '/view1'});
   }]);*/