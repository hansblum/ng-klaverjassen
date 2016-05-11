(function() {
    angular.module('app')
        .controller('PageTitleController', PageTitleController );

    function PageTitleController() {
        var vm = this;
        vm.title = 'Klaverjassen met AngularJS';
    }
})();