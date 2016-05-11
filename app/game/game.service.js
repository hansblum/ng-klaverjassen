(function() {
    'use strict';
    angular.module('app')
        .constant('SIDES', ['north', 'east', 'south', 'west'])
        .service('gameService', gameService);

    gameService.$inject = ['playerService', 'cardsService'];
    function gameService(playerService, cardsService) {
        var self = this;
        self.game = undefined;
        this.startNewGame = function() {
            self.game = new Game(playerService.getPlayers(), cardsService.getShuffledCards(), playerService.getPlayers().south);
            self.game.deal();
            return self.game;
        }

    }

    function Game(players, cards, dealer) {
        var self = this;
        this.players = players;
        this.dealer = dealer;
        this.leader = dealer.next();
        this.cards = cards;

        this.deal = function deal() {
            var cardsToDeal = angular.copy(self.cards);
            dealCardsToEachPlayer(cardsToDeal, 3);
            dealCardsToEachPlayer(cardsToDeal, 2);
            dealCardsToEachPlayer(cardsToDeal, 3);
        }

        function dealCardsToEachPlayer(cardsToDeal, amount) {
            var players = [ self.dealer.next(), self.dealer.next().next(), self.dealer.next().next().next(), self.dealer ];
            for (var i=0; i<players.length; i++) {
                var player = players[i];
                var dealCards = cardsToDeal.slice(0, amount);
                cardsToDeal.splice(0, amount);
                player.receiveCards(dealCards);
            }
        }

    }
})();