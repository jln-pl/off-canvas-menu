describe('OffCanvasMenu.service', function() {
    var $compile, offCanvasMenuService;

    beforeEach(module('offCanvasMenuTemplate'));
    beforeEach(module('OffCanvasMenu'));

    beforeEach(inject(function(_$compile_, _$rootScope_, _$httpBackend_, _offCanvasMenuService_){
        $httpBackend = _$httpBackend_;
        offCanvasMenuService = _offCanvasMenuService_;
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

    it('should make proper GET request', function () {
        var promise = offCanvasMenuService.getData('data.json');

        $httpBackend.expectGET('data.json');
        $httpBackend.flush();
    });
});
