/**
 * Created by remy on 27/02/17.
 */
// Register inventory-list wit its template and controller
/**
 * @module inventoryList
 * @submodule inventoryList-component
 * @required
 */
angular
    .module('inventoryList')
    .component('inventoryList', {
      /**
       * Template for this view's container...
       *
       * @property inventory-list.template.html
       * @type String
       * @default "<div>"
       * @required
       */
        templateUrl: 'modules/inventory-list/inventory-list.template.html',
      /**
       * A class that sends HTTP requests to the inventory-api
       * to receive inventory-items and screen them as a list
       *
       * @class InventoryListController
       * @constructor
       * @Param {Object} $scope carries received inventory-items in the scope
       * @Param {Object} $http sends the request to the inventory api
       * @required
       *
       */
        controller: function InventoryListController($scope, $http) {

        /**
         * Returns a HTTP-Reponse of deletion
         *
         * @method $http.get
         * @Param {String} path http://100.127.254.3:3000/api/inventory-items
         * @return {String} HTTP-StatusCode 200 or 404 or 500
         * @required
         */
            //get data
            $http.get('http://100.127.254.3:3000/api/inventory-items', {})
                .then(function (response) {
                    $scope.inventoryItems = response.data;
                });
        }
});