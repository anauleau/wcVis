worldCupApp.controller('teamsCtrl', ['$scope', 'dataService', 'sharedData',
    function ($scope, dataService, sharedData) {
        $scope.teams = sharedData.teams;
    }]);