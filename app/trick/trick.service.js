(function(){
    'use strict';

    angular.module('app')
        .service('trickService', trickService);

    trickService.$inject = ['SIDES', 'COLORS', 'SYMBOLS', '$log'];
    function trickService(SIDES, COLORS, SYMBOLS, $log) {
        var self = this;
        self.$log = $log;
        self.SIDES = SIDES;
        self.COLORS = COLORS;
        self.SYMBOLS = SYMBOLS;
        self.trick = undefined;

        self.createTrick = createTrick;

        function createTrick(leader, trumpColor) {
            self.trick = new Trick(leader, trumpColor, self.validSides, self.validColors, self.validSymbols);
            return self.trick;
        }

        function Trick(leader, trumpColor, SIDES, COLORS, SYMBOLS) {
            var self = this;
            self.leader = leader;
            self.trumpColor = trumpColor;
            self.SIDES = SIDES;
            self.COLORS = COLORS;
            self.SYMBOLS = SYMBOLS;

            self.cardsPlayed = {
                north: undefined,
                east: undefined,
                south: undefined,
                west: undefined
            }

            self.isComplete = isComplete;
            self.winningHand = winningHand;

            function winningHand() {
                return undefined;
            }

            function play(side, card) {
                if (isValidSide(side) && isValidCard(card)) {
                    self.cardsPlayed[side] = card;
                }
            }

            function isValidCard(card) {
                if (card && card.symbol && card.color) {
                    return isValidSymbol(card.symbol) && isValidColor(card.color);
                }
            }

            function isValidSymbol(symbol) {
                return self.SYMBOLS.indexOf(symbol) >= 0;
            }

            function isValidColor(color) {
                return self.COLORS.indexOf(color) >= 0;
            }

            function isValidSide(side) {
                return self.SIDES.indexOf(side) >= 0;
            }

            function isComplete() {
                if (self.cardsPlayed.north && self.cardsPlayed.east && self.cardsPlayed.south && self.cardsPlayed.west) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }


})();