describe('OffCanvasMenu.directive', function() {
    var $compile, $rootScope, $httpBackend, element;

    beforeEach(module('offCanvasMenuTemplate'));
    beforeEach(module('OffCanvasMenu'));

    beforeEach(inject(function(_$compile_, _$rootScope_, _$httpBackend_){
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $httpBackend = _$httpBackend_;
    }));

    beforeEach(function (){
        $httpBackend
        .when('GET', 'data.json')
        .respond([{
            url: 'some-url',
            anchor: 'some-anchor'
        }, {
            url: 'some-url1',
            anchor: 'some-anchor1'
        }]);
    });

    afterEach(function() {
       $httpBackend.verifyNoOutstandingExpectation();
       $httpBackend.verifyNoOutstandingRequest();
   });

    it('should render menu with two links', function() {
        element = $compile("<off-canvas-menu-directive src='data.json'></off-canvas-menu-directive>")($rootScope);
        $rootScope.$digest();
        $httpBackend.flush();
        
        expect(element.find('li').length).toEqual(2);
    });

    it('should render link with proper anchor and href', function() {
        element = $compile("<off-canvas-menu-directive src='data.json'></off-canvas-menu-directive>")($rootScope);
        $rootScope.$digest();
        $httpBackend.flush();
        
        expect(element.find('li')[1].innerHTML).toContain('href="some-url1"');
        expect(element.find('li')[1].innerHTML).toContain('some-anchor1');
    });
});
