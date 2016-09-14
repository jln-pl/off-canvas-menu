(function () {
    'use strict';

    angular
        .module('OffCanvasMenu')
        .directive('offCanvasMenuDirective', offCanvasMenuDirective);

    function offCanvasMenuDirective() {
        return {
            restrict: 'E',
            templateUrl: 'template.html',
            scope: true,
            bindToController: {
                dataUrl: '@src'
            },
            controller: 'OffCanvasMenuController',
            controllerAs: 'vm'
        };
    }

})();