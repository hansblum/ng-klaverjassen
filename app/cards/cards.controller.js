(function() {
    angular.module('app')
        .controller('CardsController', CardsController);

    CardsController.$inject = ['cardsFactory'];
    function CardsController(cardsFactory) {
        var vm = this;
        vm.cards = [];
        vm.shuffle = shuffle;
        vm.slices = [];

        init();

        function shuffle() {
            vm.cards = cardsFactory.getShuffledCards();
            slice();
        }

        function init() {
            vm.cards = cardsFactory.getCards();
            slice();
        }

        function slice() {
            vm.slices=[
                vm.cards.slice(0,8),
                vm.cards.slice(8,16),
                vm.cards.slice(16,24),
                vm.cards.slice(24)];
        }
    }

})();
