(function(){
    angular.module('app')
        .service('playerService', playerService);

    function playerService() {
        var self = this;
        this.players = undefined;
        this.createPlayers = createPlayers;
        this.getPlayers = getPlayers;

        function createPlayers(northName, eastName, southName, westName) {
            self.players = {
                north: new Player(northName),
                east : new Player(eastName),
                south : new Player(southName),
                west : new Player(westName)
            };
            self.players.south
                .next(self.players.west)
                .next(self.players.north)
                .next(self.players.east)
                .next(self.players.south);
        }

        function getPlayers () {
            if (!self.players) {
                self.createPlayers('Barend', 'Gerrit', 'Joop', 'Hein');
            }
            return self.players;
        }
        
        function Player(name) {
            var COLOR_ORDER = ['spades', 'hearts', 'diamonds', 'clubs'];
            var SYMBOL_ORDER = [ 'ace', 'king', 'queen', 'jack', 'ten', 'nine', 'eight', 'seven'];

            var self = this;
            this.name = name;
            this.nextPlayer = undefined;
            this.gameLeader = false;
            this.hand = [];

            function getName() {
                return self.name;
            }

            function receiveCards(cards) {
                self.hand.push.apply(self.hand, cards);
                self.hand.sort(cardsCompare);
            }

            function next(nextPlayer) {
                if (nextPlayer) {
                    self.nextPlayer = nextPlayer;
                }
                return self.nextPlayer;
            }

            function cardsCompare(card1, card2) {
                var result = COLOR_ORDER.indexOf(card1.color) - COLOR_ORDER.indexOf(card2.color);
                if (result==0) {
                    result = SYMBOL_ORDER.indexOf(card1.symbol) - SYMBOL_ORDER.indexOf(card2.symbol);
                }
                return result;
            }

            this.receiveCards = receiveCards;
            this.next = next;
            this.getName = getName;
        }

    }
})();