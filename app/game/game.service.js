(function() {
    'use strict';
    angular.module('app')
        .service('gameService', gameService);

    function gameService() {
        var game = this;
        game.players = [ new Player('you'), new Player('Koos'), new Player('Joop'), new Player('Gerrit')];
        game.dealer = 0;

        game.deal = deal;

        function deal(cards) {
            var dealingCards = angular.copy(cards);
            dealThreeCardsToEachPlayer(dealingCards);
            dealTwoCardsToEachPlayer(dealingCards);
            dealThreeCardsToEachPlayer(dealingCards);
        }

        function dealTwoCardsToEachPlayer(dealingCards) {
            dealCardsToEachPlayer(game.dealer, 2, dealingCards);
        }

        function dealThreeCardsToEachPlayer(dealingCards) {
            dealCardsToEachPlayer(game.dealer, 3, dealingCards);
        }

        function dealCardsToEachPlayer(dealer, amount, dealingCards) {
            for (var i=0; i<game.players.length;i++) {
                var dealCards = dealingCards.slice(0,amount+1);
                dealingCards.splice(0, amount);
                var player = game.players[(dealer + i) % game.players.length];
                player.receiveCards(dealCards);
            }
        }
    }

    function Player(name) {
        var player = this;
        player.name = name;
        player.hand = [];

        function receiveCards(cards) {
            player.hand.concat(cards);
        }

        this.receiveCards = receiveCards;

    }
})();