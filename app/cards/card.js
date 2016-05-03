(function() {
    angular.module('app')
        .directive('card', function() {
            return {
                restrict: 'E',
                templateUrl: function(elem, attr){
                    return '/templates/cards/' + attr.symbol + '-of-' + attr.color + '.svg';
                }
            };
        })
})();