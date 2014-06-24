worldCupApp.controller('tournamentsCtrl', ['$scope', 'sharedData',
    function ($scope, sharedData) {
        // attach tournamnets from sharedData service to scope
        sharedData.getTournaments().then(function() {
            $scope.tournaments = sharedData.tournaments;
        });
    }]);