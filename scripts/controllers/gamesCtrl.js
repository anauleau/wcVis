worldCupApp.controller('gamesCtrl', ['$scope', 'dataService',
    function ($scope, dataService) {
        $scope.name = "Games";

        angular.forEach($scope.data.games, function(game) {
            angular.noop(game);
        })
        //feature grid where all games can be viewed, filtered and searched
    }]);
