(function(){
    'use strict';

    angular.module('app')
        .directive('kjTable', kjTableDirective);

    kjTableDirective.$inject = ['$log'];
    function kjTableDirective($log) {
        return {
            restrict: 'E',
            templateUrl: '/templates/table/kj-table.html',
            scope: {
                game: '='
            }
        };
    }

})();