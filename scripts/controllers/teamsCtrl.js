worldCupApp.controller('teamsCtrl', ['$scope', 'sharedData',
    function ($scope, sharedData) {
        // attach teams from shared data service to scope
        $scope.teams = sharedData.teams;
    }]);