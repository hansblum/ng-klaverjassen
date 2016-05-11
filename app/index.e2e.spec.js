describe('Simple landing page tests', function() {
    it('has a cool title', function() {
        browser.get('http://localhost:8080');
        expect(browser.getTitle()).toEqual('Klaverjassen met angularjs');
    });

});