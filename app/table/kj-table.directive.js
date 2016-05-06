(function(){
    'use strict';

    angular.module('app')
        .directive('kjTable', kjTableDirective);

    function kjTableDirective() {
        return {
            restrict: 'E',
            templateUrl: '/templates/table/kj-table.html',
            link: function(scope, elem, attr) {

            }
        };
    }

})();