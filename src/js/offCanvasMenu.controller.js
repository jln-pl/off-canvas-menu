(function () {
    'use strict';

    angular
        .module('OffCanvasMenu')
        .controller('OffCanvasMenuController', OffCanvasMenuController);

    OffCanvasMenuController.$inject = ['$scope', 'offCanvasMenuService', '$q'];

    function OffCanvasMenuController($scope, offCanvasMenuService, $q) {
        var vm = this;
        
        vm.changeShouldShow = changeShouldShow; 
        vm.loading = true;

        activate();

        function activate() {
            offCanvasMenuService
                .getData(vm.dataUrl)
                .then(storeData)
                .catch(storeDataFailed);
        }

        function changeShouldShow(value) {
            vm.shouldShow = value;
        }

        function storeData(results) {
            vm.menu = results.data;
            vm.loading = false;
        }

        function storeDataFailed(error) {
            console.error(error);
            return $q.reject(error);
        }
    }

})();