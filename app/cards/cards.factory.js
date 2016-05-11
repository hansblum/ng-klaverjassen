(function() {
    'use strict';
    angular.module('app')
        .constant('COLORS', ['hearts', 'spades', 'diamonds', 'clubs'])
        .constant('SYMBOLS', ['ace', 'king', 'queen', 'jack', 'ten', 'nine', 'eight', 'seven'])
        .factory('cardsFactory', cardsFactory);

    cardsFactory.$inject = ['COLORS', 'SYMBOLS'];
    function cardsFactory(COLORS, SYMBOLS) {

        var CARDS = [];

        createCards();

        return {
            getCards : getCards,
            getShuffledCards : getShuffledCards,
            CARDS: CARDS
        };

        /**
         * Gives a copy of the CARDS, to avoid global manipulation of the cards./
         * @returns {*} A copy op the CARDS.
         */
        // please also note that returning an immutable array was considered in the design.
        // [Unf|F]ortunatly, we came to the conclusion that immutability would not solve an important problem.
        function getCards() {
            return angular.copy(CARDS);
        }

        /**
         * @returns {Array}
         */
        function getShuffledCards() {
            var cards = getCards();
            var shuffledCards = [];
            for (var n = 32; n > 0; n--) {
                var random = Math.floor(n * Math.random());
                var card = cards[random];
                shuffledCards.push(card);
                cards.splice(random, 1);
            }
            return shuffledCards;
        }

        /**
         * Create all 32 cards in the Clubjacking game.
         */
        function createCards() {
            CARDS = [];
            for (var colorNumber=0; colorNumber<COLORS.length;colorNumber++) {
                for (var symbolNumber=0; symbolNumber<SYMBOLS.length; symbolNumber++) {
                    CARDS.push({
                        id: colorNumber * 8 + symbolNumber,
                        color: COLORS[colorNumber],
                        symbol: SYMBOLS[symbolNumber]
                    });
                }
            }
        }
    }
})();