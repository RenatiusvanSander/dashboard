/**
 * Created by remy on 27/02/17.
 */
// define the dashboardApp modules
/**
 * Store the modules insertInventoryItem, inventoryList, updateInventoryItem
 *
 * @method angular.module
 * @required
 */
angular
    .module('dashboardApp', [
        // list of included modules
        'insertInventoryItem',
        'inventoryList',
        'updateInventoryItem'
    ]);