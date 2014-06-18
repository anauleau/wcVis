worldCupApp.controller('summaryCtrl', ['$scope', 'dataService', '$filter',
    function ($scope, dataService) {
        // feature summary stats and charts
        $scope.name = "Summary";
        $scope.totalWorldCupTeams = 0;
        $scope.totalWorldCups = 0;
        $scope.totalGoalsScored = 0;
        $scope.totalMatchesPlayed = 0;
        $scope.totalAttendence = 0;

        angular.forEach($scope.data.teams, function () {
            $scope.totalWorldCupTeams ++;
        });

        angular.forEach($scope.data.tournaments, function (value) {
            $scope.totalWorldCups ++;
            $scope.totalMatchesPlayed += value.summary.matchesPlayed;
            $scope.totalGoalsScored += value.summary.totalGoals;
            $scope.totalAttendence += value.summary.attendance;
        });

        $scope.goalsPerTournament = [
            {
                "key": "Goals",
                "values": []
            }
        ];

        $scope.attendancePerTournament = [
            {
                "key": "Attendance",
                "values": []
            }
        ];
        angular.forEach($scope.data.tournaments, function (value, key) {
            $scope.goalsPerTournament[0].values.push([parseInt(key), value.summary.totalGoals]);
            $scope.attendancePerTournament[0].values.push([parseInt(key), value.summary.attendance]);
        });

        $scope.noDec = function (d) {
            return d;
        }
    }]);