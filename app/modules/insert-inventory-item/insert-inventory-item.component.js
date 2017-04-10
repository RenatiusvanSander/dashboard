/**
 * Created by remy on 23/02/17.
 */
angular
    .module('insertInventoryItem')
    .component('insertInventoryItem', {
        templateUrl: 'modules/insert-inventory-item/insert-inventory-item.template.html',

        // controller InsertInventoryItemController
        controller: function InsertInventoryItemController($scope, $http) {
            $scope.item = {}; // first declare it

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