(function(){
    'use strict';

    describe("Game service tests", function() {

        var gameService;
        var cardsService;

        beforeEach(function() {
            module('app');
            inject(function(_gameService_){
                gameService = _gameService_;
            });
            inject(function(_cardsService_) {
                cardsService = _cardsService_;
            });
        });


        it('Injected the gameService', function() {
            expect(gameService).to.be.truthy;
        });

        it ('has four players', function() {
            var game = gameService.startNewGame();
            expect(game.players.north).to.be.truthy;
            expect(game.players.east).to.be.truthy;
            expect(game.players.south).to.be.truthy;
            expect(game.players.west).to.be.truthy;
        });

        it ('plays the game clockwise', function() {
            var game = gameService.startNewGame();
            var players = game.players;
            var player = players.north;
            var nextPlayer = players.east;
            expect(player.next()).to.equal(nextPlayer);
            player = nextPlayer;
            nextPlayer = players.south;
            expect(player.next()).to.equals(nextPlayer);
            player = nextPlayer;
            nextPlayer = players.west;
            expect(player.next()).to.equal(nextPlayer);
            player = nextPlayer;
            nextPlayer = players.north;
            expect(player.next()).to.equal(nextPlayer);
        });

        it('makes the player, who\'s to the left of the dealer, the leader', function() {
            var game = gameService.startNewGame();
            var dealer = game.dealer;
            expect(game.leader).to.equal(game.dealer.next());
            
        })

        it ('deals eight cards to every player', function() {
            var game = gameService.startNewGame();
            var players = game.players;
            expect(players.north.hand.length).to.equal(8);
            expect(players.east.hand.length).to.equal(8);
            expect(players.south.hand.length).to.equal(8);
            expect(players.west.hand.length).to.equal(8);
        });


    });
})();