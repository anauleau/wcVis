worldCupApp.service('dataService', ['$http', '$q',
    function ($http, $q) {
        //_getAppearances returns country level appearance data {'country': #appearances}
        function _getAppearances (){
            var deferred = $q.defer();
            $http.get('data/appearances.json').success(function(result) {
                deferred.resolve(result);
            });
            return deferred.promise;
        }

        //_getDataByTourney returns an obj with tournement data {'touranmentYear': {'data'}}
        function _getDataByTourney (){
            var deferred = $q.defer();
            $http.get('data/wcDataByYear.json').success(function(result) {
                deferred.resolve(result);
            });
            return deferred.promise;
        }

        return {
            getAppearances: _getAppearances,
            getDataByTourney: _getDataByTourney
        }
    }]);