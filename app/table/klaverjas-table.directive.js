(function(){
    'use strict';

    angular.module('app')
        .directive('klaverjasTable', klaverjasTableDirective);

    function klaverjasTableDirective() {
        return {
            restrict: 'E',
            templateUrl: '/templates/table/klaverjas-table.html',
            scope: {
                game: '='
            }
        };
    }

})();