(function () {
    angular
        .module('app')
        .directive('pageTitle', pageTitleDirective);

    function pageTitleDirective() {
        return {
            templateUrl: 'templates/title/title.html',
            restrict: 'E'
        };
    }
})();