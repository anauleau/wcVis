/**
 * This service returns data getting methods which are used to inject JSON
 * into controllers that need the data
 */
worldCupApp.service('dataService', ['$http', '$q',
    function ($http, $q) {

        _placeIndex = {
            'champion': 'Champion',
            'second': 'Second Place',
            'third': 'Third Place',
            'fourth': 'Fourth Place',
            'quarters': 'Quarter Finalist',
            'roundOf16': 'Round of 16',
            'group': 'Eliminated in Group Play',
            'not known': 'TBD'
        }

        function _getGames (){
            var deferred = $q.defer();
            $http.get('data/games.json').success(function(result) {
                deferred.resolve(result);
            });
            return deferred.promise;
        }

        function _getTeams (){
            var deferred = $q.defer();
            $http.get('data/teams.json').success(function(result) {
                deferred.resolve(result);
            });
            return deferred.promise;
        }

        function _getTournaments (){
            var deferred = $q.defer();
            $http.get('data/tournamentSummaries.json').success(function(result) {
                deferred.resolve(result);
            });
            return deferred.promise;
        }

        return {
            getGames: _getGames,
            getTeams: _getTeams,
            getTournaments: _getTournaments,
            placeIndex: _placeIndex
        }
    }]);