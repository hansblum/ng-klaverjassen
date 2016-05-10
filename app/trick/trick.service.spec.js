(function () {
    describe('important unit tests for trick functionality', function () {
        describe('The trick is not complete before all players played their card', function() {
            var trickService;
            var trick;

            beforeEach(function () {
                angular.module('app');
                inject(function (_trickService_) {
                    trickService = _trickService_;
                });

            });

            beforeEach(function() {
                trick = trickService.createTrick();
            });

            it('is complete when all four cards are played', function() {
                expect(trick.isComplete()).to.be.falsy;
            });
        });


        describe('When testing the winning side of a completed trick', function () {

            it('designates no winner before the trick is complete', function () {

            });

            it('designates the side that played the jack of trump color as the winner', function () {

            });
        });
    });
})();