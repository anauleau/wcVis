worldCupApp.controller('parentCtrl', ['$scope', 'dataService', 'sharedData',
    function ($scope, dataService, sharedData) {
        $scope.models = {};
        $scope.placeIndex = dataService.placeIndex;
    }]);