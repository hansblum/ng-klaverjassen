(function() {
    angular.module('app')
        .controller('PageTitleController', PageTitleController );

    function PageTitleController() {
        var vm = this;
        vm.title = 'Ik kan klaverjassen met AngularJS';
    }
})();