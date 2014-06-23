worldCupApp.controller('summaryCtrl', ['$scope', 'dataService',
    function ($scope, dataService) {
        
        // Attach summary stats to scope
        $scope.totalGoalsScored = 0;
        $scope.totalMatchesPlayed = 0;
        $scope.totalAttendence = 0;
        $scope.totalWorldCupTeams = Object.keys($scope.data.teams).length;
        $scope.totalWorldCups = Object.keys($scope.data.tournaments).length;

        // Sum up various stat totals
        angular.forEach($scope.data.tournaments, function (value) {
            $scope.totalGoalsScored += value.summary.matchesPlayed;
            $scope.totalMatchesPlayed += value.summary.totalGoals;
            $scope.totalAttendence += value.summary.attendance;
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