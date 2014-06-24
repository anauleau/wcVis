worldCupApp.controller('teamsCtrl', ['$scope', 'sharedData',
    function ($scope, sharedData) {
        // attach teams from shared data service to scope
        sharedData.getTeams().then(function() {
            $scope.teams = sharedData.teams;
        });
    }]);