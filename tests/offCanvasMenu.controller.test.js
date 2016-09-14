describe('OffCanvasMenu.controller', function() {
    var controller, $controller, $q, deffered, $scope, offCanvasMenuService;
    
    beforeEach(module('offCanvasMenuTemplate'));
    beforeEach(module('OffCanvasMenu'));

    beforeEach(inject(function (_$controller_, _$q_, _$rootScope_, _offCanvasMenuService_) {
        $controller = _$controller_;
        $q = _$q_;
        $scope = _$rootScope_.$new();
        deffered = $q.defer();
        offCanvasMenuService = _offCanvasMenuService_;
    }));

    beforeEach(function () {
        spyOn(offCanvasMenuService, 'getData').and.returnValue(deffered.promise);

        controller = $controller('OffCanvasMenuController', { 
            $scope: {} , 
            offCanvasMenuService: offCanvasMenuService, 
            $q: $q
        });
    });

    describe('activate/initialize controller', function() {
        describe('with resolved service response', function () {
            it('should set "menu" with data from "offCanvasMenuService" service', function() {
                deffered.resolve({data: 'some-data'});
                $scope.$apply();

                expect(controller.menu).toEqual('some-data');
            });

            it('should set "loading" as false', function() {
                deffered.resolve({data: 'some-data'});
                $scope.$apply();

                expect(controller.loading).toEqual(false);
            });
        });
    });

    describe('changeShouldShow', function () {
        it('should change "shouldShow" to given value', function () {
            controller.shouldShow = false;

            controller.changeShouldShow(true);

            expect(controller.shouldShow).toEqual(true);
        })
    });
});
