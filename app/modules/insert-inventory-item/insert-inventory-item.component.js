/**
 * Created by remy on 23/02/17.
 */
/**
 * @module insertInventoryItem
 * @submodule insertInventoryItem-component
 */
angular
    .module('insertInventoryItem')
    .component('insertInventoryItem', {
      /**
       * Template for this view's container...
       *
       * @property insert-inventory-item.template.html
       * @type String
       * @default "<div>"
       */
        templateUrl: 'modules/insert-inventory-item/insert-inventory-item.template.html',

      /**
       * A utility that brokers HTTP requests...
       *
       * @class InsertInventoryItemController
       * @constructor
       * @param {Object} $scope stores item-varies for inserting
       * @param {Object} $http posts data to the inventory-api
       * @required
       *
       */
        // controller InsertInventoryItemController
        controller: function InsertInventoryItemController($scope, $http) {
        /**
         * @param {String} item stores inserting data
         * Attribute item
         */
            $scope.item = {}; // first declare it

        /**
         * Returns a http-status code. It sends thed ata to the api to
         * store it inside database of inventory items.
         *
         * @method scope.Submit
         * @return {String} http-status code
         */
            // post information to api to insert item
            $scope.Submit = function () {
                var postData = {

                    itemname: $scope.item.name,
                    barcode: $scope.item.barcode,
                    borrower: $scope.item.borrower,
                    inventoryNo: $scope.item.inventoryNo,
                    fixLocation: $scope.item.fixLocation,
                    comment: $scope.item.comment
                };

                postUrl = 'http://100.127.254.3:3000/api/inventory-items/';

                // now post data to api
                $http.post(postUrl, postData, [])
                    .then(function (status) {

                        // is valid and inserted into database
                        confirm($scope.item.inventoryNo + ' ' + status.statusText + '!');

                    })
                    .catch(function (error) {

                        // catch the error
                        alert(error.data + ' means there is a validation error.');
                    });
            }
        }
    });