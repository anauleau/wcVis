worldCupApp.controller('tournamentsCtrl', ['$scope', 'dataService', 'sharedData',
    function ($scope, dataService, sharedData) {
        $scope.name = "Tournaments";
        // features drop down by tournament feature summary by tournament
        $scope.tournaments = sharedData.tournaments;
        console.log($scope.tournaments);
    }]);