worldCupApp.controller('summaryCtrl', ['$scope', 'sharedData', '$q',
    function ($scope, sharedData, $q) {
        var all;

        // When all data is on sharedData then process data for view
        all = $q.all([
            sharedData.getTeams(),
            sharedData.getTournaments()
        ]);

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

        // Removes decimal point from tick in charts
        $scope.noDec = function (d) {
            return d;
        }

        all.then(function() {
            // Attach summary stats to scope
            $scope.summary = {};
            $scope.summary.totalGoalsScored = 0;
            $scope.summary.totalMatchesPlayed = 0;
            $scope.summary.totalAttendence = 0;
            $scope.summary.totalWorldCupTeams = Object.keys(sharedData.teams.list).length;
            $scope.summary.totalWorldCups = Object.keys(sharedData.tournaments.list).length;

            // Sum up various stat totals
            angular.forEach(sharedData.tournaments.list, function (value) {
                $scope.summary.totalGoalsScored += value.summary.matchesPlayed;
                $scope.summary.totalMatchesPlayed += value.summary.totalGoals;
                $scope.summary.totalAttendence += value.summary.attendance;
            });

            // Populate data values for summary view charts
            angular.forEach(sharedData.tournaments.list, function (value, key) {
                $scope.goalsPerTournament[0].values.push([parseInt(key), value.summary.totalGoals]);
                $scope.attendancePerTournament[0].values.push([parseInt(key), value.summary.attendance]);
            });

            // Renders summary page viewable after all stats have been counted
            $scope.summaryLoaded = true;
        });
    }]);