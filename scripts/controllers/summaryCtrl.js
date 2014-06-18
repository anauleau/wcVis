worldCupApp.controller('summaryCtrl', ['$scope', 'dataService', '$filter',
    function ($scope, dataService) {
        // feature summary stats and charts
        var totalTeams = 0,
            totalMatches = 0,
            totalWorldCups = 0,
            totalGoals = 0,
            totalAttendence = 0;
        $scope.name = "Summary";

        angular.forEach($scope.data.teams, function () {
            totalTeams ++;
        });

        angular.forEach($scope.data.tournaments, function (value) {
            totalWorldCups ++;
            totalMatches += value.summary.matchesPlayed;
            totalGoals += value.summary.totalGoals;
            totalAttendence += value.summary.attendance;
        });

        $scope.totalWorldCupTeams = totalTeams;
        $scope.totalWorldCups = totalWorldCups;
        $scope.totalGoalsScored = totalGoals;
        $scope.totalMatchesPlayed = totalMatches;
        $scope.totalAttendence = totalAttendence;

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