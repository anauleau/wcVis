worldCupApp.controller('summaryCtrl', ['$scope', 'dataService',
    function ($scope, dataService) {
        // feature summary stats and charts
        $scope.name = "Summary";
        $scope.totalWorldCupTeams = 0;
        $scope.totalWorldCups = 0;
        $scope.totalGoalsScored = 0;
        $scope.totalMatchesPlayed = 0;
        $scope.totalAttendence = 0;

        dataService.getTeams().then(function (teams) {
            angular.forEach(teams, function () {
                $scope.totalWorldCupTeams ++;
            });
        });

        dataService.getTournaments().then(function (tournaments) {
            angular.forEach(tournaments, function (value) {
                $scope.totalWorldCups ++;
                $scope.totalMatchesPlayed += value.summary.matchesPlayed;
                $scope.totalGoalsScored += value.summary.totalGoals;
                $scope.totalAttendence += value.summary.attendance;
            });
        });
    }]);