worldCupApp.controller('tournamentGameSummaryCtrl', ['$scope', 'dataService',
    function ($scope, dataService) {
        dataService.getDataByTourney().then(function(data) {
            dataByTourney = data;
        });
    }]);