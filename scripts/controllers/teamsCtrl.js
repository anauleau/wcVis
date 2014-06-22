worldCupApp.controller('teamsCtrl', ['$scope', 'dataService', 'sharedData',
    function ($scope, dataService, sharedData) {
        $scope.name = "Teams";
        $scope.teams = sharedData.teams;
    }]);