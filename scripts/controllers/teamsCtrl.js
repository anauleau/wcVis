worldCupApp.controller('teamsCtrl', ['$scope', 'dataService',
    function ($scope, dataService) {
        $scope.name = "Teams";
        $scope.teams = [];
        //feature dropdown by team, best result, appearances, flag, total goals, games grid
        angular.forEach($scope.data.teams, function(data, team) {
            angular.noop(data);
            $scope.teams.push(team);
        });

        $scope.teams.sort();
    }]);