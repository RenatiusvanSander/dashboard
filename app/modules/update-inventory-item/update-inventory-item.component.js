/**
 * Created by remy on 28/02/17.
 */
angular
    .module('updateInventoryItem')
    .component('updateInventoryItem', {
        templateUrl: 'modules/update-inventory-item/update-inventory-item.template.html',
        controller: function UpdateInventoryController($scope, $http) {
            $scope.deleteItem = {};

            $scope.deleteInventorySubmit = function () {

                // alert
                alert($scope.deleteItem.inventoryNo + ' will be deleted from inventory list!');

                // that has to be confirmed
                var deleteConfirmed = confirm('Please, confirm deletion of ' + $scope.deleteItem.inventoryNo);

                if (deleteConfirmed) {

                    // delete URL
                    deleteURL = 'http://localhost:3000/api/inventory-items/' + $scope.deleteItem.inventoryNo;

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