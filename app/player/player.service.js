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
        }

        function getPlayers () {
            if (!self.players) {
                self.createPlayers('Barend', 'Gerrit', 'Joop', 'Hein');
            }
            return self.players;
        }


        function Player(name) {
            var self = this;
            this.name = name;
            this.gameLeader = false;

            this.getName = function() {
                return self.name;
            }
        }

    }
})();