worldCupApp.controller('parentCtrl', ['$scope', 'dataService',
    function ($scope, dataService) {
        $scope.data = {};
        
        // Load tournaments into the parent
        dataService.getTournaments().then(function (tournaments) {
            $scope.data.tournaments = tournaments;
        });

        // Load teams into the parent
        dataService.getTeams().then(function (teams) {
            $scope.data.teams = teams;
        });

        // Load teams into the parent
        dataService.getGames().then(function (games) {
            $scope.data.games = games;
        });
    }]);