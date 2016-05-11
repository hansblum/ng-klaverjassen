(function() {
    angular.module('app')
        .controller('CardsController', CardsController);

    CardsController.$inject = ['cardsService'];
    function CardsController(cardsService) {
        var vm = this;
        vm.cards = [];
        vm.shuffle = shuffle;
        vm.slices = [];

        init();

        function shuffle() {
            vm.cards = cardsService.getShuffledCards();
            slice();
        }

        function init() {
            vm.cards = cardsService.getCards();
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
