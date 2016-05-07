(function() {

    angular.module('app')
        .controller('GameController', GameController);

    GameController.$inject = ['gameService'];
    function GameController(gameService) {
        var vm = this;
        vm.game = gameService.startNewGame();
    }

    
}) ();
