(function () {
    'use strict';

    angular
        .module('OffCanvasMenu')
        .factory('offCanvasMenuService', offCanvasMenuService);

    offCanvasMenuService.$inject = ['$http'];

    function offCanvasMenuService($http) {
        var service = {
            getData: getData
        };

        return service;

        function getData(url) {
            return $http.get(url);
        }
    }

})();