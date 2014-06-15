worldCupApp.controller('tournamentsCtrl', ['$scope', 'dataService',
    function ($scope, dataService) {
        $scope.name = "Tournaments";

        $scope.goalsPerTournament = [
            {
                "key": "Goals",
                "values": []
            }
        ];

        dataService.getTournaments().then(function (tournaments) {
            var goals = [];
            angular.forEach(tournaments, function (value, key) {
                goals.push([parseInt(key), value.summary.totalGoals]);
            });
            $scope.goalsPerTournament[0].values = goals;
        });
    }]);