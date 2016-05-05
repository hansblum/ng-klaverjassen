(function(){

    describe("Basic service tests", function() {

        var gameService;
        var cardFactory;

        beforeEach(function() {
            module('app');
            inject(function(_gameService_){
                gameService = _gameService_;
            });
            inject(function(_cardsFactory_) {
                cardFactory = _cardsFactory_;
            });
        });


        it('Injected the gameService', function() {
            expect(gameService).to.be.truthy;
        });

        it ('has four players', function() {
            expect(gameService.players.length).to.equal(4);
        });

        it ('deals the cards', function() {
            gameService.deal(cardFactory.getCards());
        });

    });
})();