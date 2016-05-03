(function() {
    describe('PageTitleControllerTests', function() {

        var $controller;

        beforeEach(function() {
            module('app');
        });

        beforeEach(inject(function(_$controller_) {
            $controller = _$controller_;
        }));



        it('runs a unit test', function() {
            expect(true).to.be.ok;
        });

        it ('has the correct page title.', function() {
            var scope = {};
            var pageTitleController = $controller('PageTitleController', {$scope: scope});
            console.log(pageTitleController);
            expect(pageTitleController.title).to.equal('Ik kan klaverjassen met AngularJS');
        });
    });
})();