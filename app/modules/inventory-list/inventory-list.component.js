/**
 * Created by remy on 27/02/17.
 */
// Register inventory-list wit its template and controller
angular
    .module('inventoryList')
    .component('inventoryList', {
        templateUrl: 'modules/inventory-list/inventory-list.template.html',
        controller: function InventoryListController($scope, $http) {

            //get data
            $http.get('http://100.127.254.3:3000/api/inventory-items', {})
                .then(function (response) {
                    $scope.inventoryItems = response.data;
                });
        }
});