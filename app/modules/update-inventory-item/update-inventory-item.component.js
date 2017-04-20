/**
 * Created by remy on 28/02/17.
 */
/**
 * @module updateInventoryItem
 * @submodule updateInventoryItem-component
 * @required
 */
angular
    .module('updateInventoryItem')
    .component('updateInventoryItem', {
      /**
       * Template for this view's container...
       *
       * @property update-inventory-item.template.html
       * @type String
       * @default "<div>"
       * @required
       */
        templateUrl: 'modules/update-inventory-item/update-inventory-item.template.html',
      /**
       * A utility that sends HTTP request to inventory-api to delete
       * inventory-items in the database
       *
       * @class UpdateInventoryController
       * @constructor
       * @Param {Object} $scope stores the inventory-number of an
       * inventory-item to be deleted
       * @Param {Object} $http is used to transfer request to
       * inventory-api
       * @required
       *
       */
        controller: function UpdateInventoryController($scope, $http) {
        /**
         * @param {Object} $scope.deleteItem carries deletion data
         * like inventory-number
         */
            $scope.deleteItem = {};

        /**
         * Returns a HTTP-Response of deletion
         *
         * @method $scope.deleteInventorySubmit
         * @return {String} HTTP-StatusCode 200 or 404 or 500
         * @required
         */
            $scope.deleteInventorySubmit = function () {

                // alert
                alert($scope.deleteItem.inventoryNo + ' will be deleted from inventory list!');

                // that has to be confirmed
                var deleteConfirmed = confirm('Please, confirm deletion of ' + $scope.deleteItem.inventoryNo);

                if (deleteConfirmed) {

                    // delete URL
                    deleteURL = 'http://100.127.254.3:3000/api/inventory-items/' + $scope.deleteItem.inventoryNo;

                    // send delete request to api
                    $http.delete(deleteURL)
                      .then(function successCallback(reponse) {
                        confirm($scope.deleteItem.inventoryNo + ' is deleted.');
                      })
                      .catch(function erorCallback(error) {
                        alert($scope.deleteItem.inventoryNo + ' is not present' +
                          '\nin database or barcode is not valid!');
                      });
                }
            }

        }
    });