/**
 * This
 */

worldCupApp.controller('homeCtrl', ['$scope', 'dataService',
    function ($scope, dataService) {
        $scope.searchOptions = {
            'tags': ['a', 'b']
        };
        dataService.getAppearances().then(function(data){
            angular.forEach(data, function(appearances, country){
                angular.noop(appearances);
                $scope.searchOptions.tags.push(country);
            })
        });
    }]);
