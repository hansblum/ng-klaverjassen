(function() {
    angular.module('app')
        .directive('card', renderCard);

    function renderCard() {
        return {
            restrict: 'E',
            scope: {
                card: '='
            },
            template: '<div class="col-xs-1">' +
                '<img class="card" src="/templates/cards/{{card.symbol}}-of-{{card.color}}.svg">' +
            '</div>'
        };
    }

})();