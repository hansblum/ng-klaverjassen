(function(){
    'use strict';

    describe('Proof correct working of cards creation', function() {

        var cardsFactory;

        beforeEach(function() {
            module('app');

            inject(function (_cardsFactory_) {
                cardsFactory = _cardsFactory_;
            });
        });

        it ('properly injects the $service but does not call getCards', function() {
            expect(cardsFactory).to.be.truthy;
            expect(cardsFactory.getCards()).not.to.be.called;
        });

        it ('gives a copy op the CARDS array when getCards is called', function() {
            var cards = cardsFactory.getCards();
            expect(cards).to.be.truthy;
            expect(cards.length).to.equal(32);
            expect(cards).not.to.equal(cardsFactory.CARDS);
        });

        it ('returns a collection of cards which contains all the cards.', function(){
            var cards = cardsFactory.getCards();
            expectCardToEqual(cards[0], { id: 0, color: 'clubs', symbol: 'seven'});
            expectCardToEqual(cards[1], { id: 1, color: 'clubs', symbol: 'eight'});
            expectCardToEqual(cards[2], { id: 2, color: 'clubs', symbol: 'nine'});
            expectCardToEqual(cards[3], { id: 3, color: 'clubs', symbol: 'ten'});
            expectCardToEqual(cards[4], { id: 4, color: 'clubs', symbol: 'jack'});
            expectCardToEqual(cards[5], { id: 5, color: 'clubs', symbol: 'queen'});
            expectCardToEqual(cards[6], { id: 6, color: 'clubs', symbol: 'king'});
            expectCardToEqual(cards[7], { id: 7, color: 'clubs', symbol: 'ace'});
            expectCardToEqual(cards[8], { id: 8, color: 'diamonds', symbol: 'seven'});
            expectCardToEqual(cards[9], { id: 9, color: 'diamonds', symbol: 'eight'});
            expectCardToEqual(cards[10], { id: 10, color: 'diamonds', symbol: 'nine'});
            expectCardToEqual(cards[11], { id: 11, color: 'diamonds', symbol: 'ten'});
            expectCardToEqual(cards[12], { id: 12, color: 'diamonds', symbol: 'jack'});
            expectCardToEqual(cards[13], { id: 13, color: 'diamonds', symbol: 'queen'});
            expectCardToEqual(cards[14], { id: 14, color: 'diamonds', symbol: 'king'});
            expectCardToEqual(cards[15], { id: 15, color: 'diamonds', symbol: 'ace'});
            expectCardToEqual(cards[16], { id: 16, color: 'hearts', symbol: 'seven'});
            expectCardToEqual(cards[17], { id: 17, color: 'hearts', symbol: 'eight'});
            expectCardToEqual(cards[18], { id: 18, color: 'hearts', symbol: 'nine'});
            expectCardToEqual(cards[19], { id: 19, color: 'hearts', symbol: 'ten'});
            expectCardToEqual(cards[20], { id: 20, color: 'hearts', symbol: 'jack'});
            expectCardToEqual(cards[21], { id: 21, color: 'hearts', symbol: 'queen'});
            expectCardToEqual(cards[22], { id: 22, color: 'hearts', symbol: 'king'});
            expectCardToEqual(cards[23], { id: 23, color: 'hearts', symbol: 'ace'});
            expectCardToEqual(cards[24], { id: 24, color: 'spades', symbol: 'seven'});
            expectCardToEqual(cards[25], { id: 25, color: 'spades', symbol: 'eight'});
            expectCardToEqual(cards[26], { id: 26, color: 'spades', symbol: 'nine'});
            expectCardToEqual(cards[27], { id: 27, color: 'spades', symbol: 'ten'});
            expectCardToEqual(cards[28], { id: 28, color: 'spades', symbol: 'jack'});
            expectCardToEqual(cards[29], { id: 29, color: 'spades', symbol: 'queen'});
            expectCardToEqual(cards[30], { id: 30, color: 'spades', symbol: 'king'});
            expectCardToEqual(cards[31], { id: 31, color: 'spades', symbol: 'ace'});
            
        });

        it ('gives us 32 shuffled cards', function() {
            var cards = cardsFactory.getShuffledCards();
            expect(cards).to.be.truthy;
            expect(cards.length).to.equal(32);
            expect(hasDuplicates(cards)).to.be.falsy;
        });

        function hasDuplicates(cards) {
            var sortedCards = angular.copy(cards).sort();
            var firstCard, secondCard;
            firstCard = sortedCards[0];
            for (var i = 1; i < cards.length; i++) {
                secondCard = cards[i];
                if (firstCard.id===secondCard.id) {
                    return true;
                }
                if (firstCard.color === secondCard.color && firstCard.symbol === secondCard.symbol) {
                    return true;
                }
                firstCard = secondCard;
            }
            return false;
        }


    });
    
    function expectCardToEqual(actualCard, expectedCard) {
        expect(actualCard.id).to.equal(expectedCard.id);
        expect(actualCard.color).to.equal(expectedCard.color);
        expect(actualCard.symbol).to.equal(expectedCard.symbol);
    }
    


})();