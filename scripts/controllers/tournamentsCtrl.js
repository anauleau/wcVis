worldCupApp.controller('tournamentsCtrl', ['$scope', 'sharedData',
    function ($scope, sharedData) {
        // attach tournamnets from sharedData service to scope
        $scope.tournaments = sharedData.tournaments;
    }]);