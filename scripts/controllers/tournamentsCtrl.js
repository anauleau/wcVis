worldCupApp.controller('tournamentsCtrl', ['$scope', 'dataService',
    function ($scope, dataService) {
        $scope.name = "Tournaments";
        // features drop down by tournament feature summary by tournament
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
        dataService.getTournaments().then(function (tournaments) {
            var goals = [],
                attendance = [];
            angular.forEach(tournaments, function (value, key) {
                goals.push([parseInt(key), value.summary.totalGoals]);
                attendance.push([parseInt(key), value.summary.attendance]);
            });
            $scope.goalsPerTournament[0].values = goals;
            $scope.attendancePerTournament[0].values = attendance;
        });
    }]);