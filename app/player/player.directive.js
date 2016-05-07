(function(){

    angular.module('app')
        .directive('player', playerDirective);

    function playerDirective() {
        return {
            restrict: 'E',
            scope: {
                player: '='
            },
            templateUrl: '/templates/player/player.html'
        };
    }
})();

