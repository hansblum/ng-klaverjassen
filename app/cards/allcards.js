(function() {
    angular.module('app')
        .directive('allCards', function() {
            return {
                restrict: 'E',
                templateUrl: '/templates/cards/cards.html'
            };
        })
})();