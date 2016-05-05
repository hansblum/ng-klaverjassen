(function(){
    'use strict';

    angular.module('app')
        .directive('klaverjasTable', function() {
            return {
                restrict: 'E',
                templateUrl: '/templates/table/table.html',
                scope: {
                    game: '=game'
                },
                link: function(scope, elem, attr, controller) {
                    console.log(scope);
                    console.log(elem);
                    console.log(attr);
                    console.log(controller);
                }
            };
        });
})();