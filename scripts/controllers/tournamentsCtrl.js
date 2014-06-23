worldCupApp.controller('tournamentsCtrl', ['$scope', 'dataService', 'sharedData',
    function ($scope, dataService, sharedData) {
        // features drop down by tournament feature summary by tournament
        $scope.tournaments = sharedData.tournaments;
        console.log($scope.tournaments);
    }]);