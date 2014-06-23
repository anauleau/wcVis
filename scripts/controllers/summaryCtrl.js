worldCupApp.controller('summaryCtrl', ['$scope', 'dataService',
    function ($scope, dataService) {

        // Attach summary stats to scope
        $scope.summary = {};
        $scope.summary.totalGoalsScored = 0;
        $scope.summary.totalMatchesPlayed = 0;
        $scope.summary.totalAttendence = 0;
        $scope.summary.totalWorldCupTeams = Object.keys($scope.data.teams).length;
        $scope.summary.totalWorldCups = Object.keys($scope.data.tournaments).length;

        // Sum up various stat totals
        angular.forEach($scope.data.tournaments, function (value) {
            $scope.summary.totalGoalsScored += value.summary.matchesPlayed;
            $scope.summary.totalMatchesPlayed += value.summary.totalGoals;
            $scope.summary.totalAttendence += value.summary.attendance;
        });

        // Initialize goals per tournament chart obj for nvd3 directive - TODO: create class & move to service
        $scope.goalsPerTournament = [
            {
                "key": "Goals",
                "values": []
            }
        ];

        // Initialize attendance per tournament chart obj for nvd3 directive - TODO: create class & move to service
        $scope.attendancePerTournament = [
            {
                "key": "Attendance",
                "values": []
            }
        ];

        // Populate data values for summary view charts
        angular.forEach($scope.data.tournaments, function (value, key) {
            $scope.goalsPerTournament[0].values.push([parseInt(key), value.summary.totalGoals]);
            $scope.attendancePerTournament[0].values.push([parseInt(key), value.summary.attendance]);
        });

        // Removes decimal point from tick in charts
        $scope.noDec = function (d) {
            return d;
        }

        // Renders summary page viewable after all stats have been counted
        $scope.summaryLoaded = true;
    }]);