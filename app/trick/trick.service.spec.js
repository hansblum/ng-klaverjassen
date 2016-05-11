(function () {
    'use strict';

    describe('important unit tests for trick functionality', function () {
        describe('The trick is not complete before all players played their card', function() {
            var gameService;
            var cardFactory;
            var trickService;
            var trick;

            beforeEach(function() {
                module('app');
                inject(function(_trickService_) {
                    trickService = _trickService_;
                })
            });

            it('can create a trick', function() {
                var trick = trickService.createTrick();
                expect(trick).to.be.truthy;
            });

            it('does not play a card by itself', function() {
                var trick = trickService.createTrick();
                expect(trick.cardsPlayed.north).to.be.falsy;
                expect(trick.cardsPlayed.east).to.be.falsy;
                expect(trick.cardsPlayed.south).to.be.falsy;
                expect(trick.cardsPlayed.west).to.be.falsy;
            })

            it('is not complete before all four cards are played', function() {
                trick = trickService.createTrick();
                expect(trick.isComplete()).to.be.falsy;
            });
        });
    });
})();