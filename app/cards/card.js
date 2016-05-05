(function() {
    angular.module('app')
        .directive('card', renderCard)
        .directive('cardSvg', renderCardSVG);


    function renderCard() {
        return {
            restrict: 'E',
            scope: {
                card: '='
            },
            // template: '<div class="col-xs-3 col-md-1">{{card.symbol}} {{card.color}}</card-svg></div>'
            template: '<div class="col-xs-3 col-md-1">' +
                '<img class="card" src="/templates/cards/{{card.symbol}}-of-{{card.color}}.svg">' +
            // '<card-svg symbol="card.symbol" color="card.color">' +
            '</card-svg></div>'
        };
    }


    function renderCardSVG() {
        return {
            restrict: 'E',
            template: function(elem, attr) {
                return
            }
        };
    }
})();