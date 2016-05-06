(function() {
    angular.module('app')
        .controller('TableController',['playerService', TableController]);

    function TableController(playerService) {
        this.vm = this;
        this.vm.players = playerService.getPlayers();
    }
})();