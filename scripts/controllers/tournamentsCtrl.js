worldCupApp.controller('tournamentsCtrl', ['$scope', 'dataService',
    function ($scope, dataService) {
        $scope.name = "Tournaments";
        // features drop down by tournament feature summary by tournament
        $scope.tournaments = [];
        //feature dropdown by team, best result, appearances, flag, total goals, games grid
        angular.forEach($scope.data.tournaments, function(data, tournament) {
            angular.noop(data);
            $scope.tournaments.push(tournament);
        });

        $scope.tournaments.sort();
    }]);