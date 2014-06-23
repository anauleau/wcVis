worldCupApp.controller('parentCtrl', ['$scope', 'dataService',
    function ($scope, dataService) {
        // Create models obj on parent so selected models aren't lost with in app navigation
        $scope.models = {};
        $scope.placeIndex = dataService.placeIndex;
    }]);