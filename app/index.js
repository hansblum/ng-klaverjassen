(function(){

    angular.module('ngKlaverjassen', []);

    angular.module('ngKlaverjassen')
        .config(configure);


    function configure() {
        this.configuration = {
            language : 'nl'
        };
    }

})();