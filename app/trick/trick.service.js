(function(){
    'use strict';

    angular.module('app')
        .service('trickService', trickService);

    function trickService() {
        var self = this;
        self.trick = undefined;
        self.createTrick = createTrick;

        function createTrick(leader, trumpColor) {
            self.trick = new Trick(leader, trumpColor);
            return self.trick;
        }
    }

    function Trick(leader, trumpColor) {
        var self = this;
        self.leader = leader;
        self.trumpColor = trumpColor;

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

        function isComplete() {
            if (cardsPlayed.north && cardsPlayed.east && cardsPlayed.south && cardsPlayed.west) {
                return true;
            } else {
                return false;
            }
        }
    }
})();