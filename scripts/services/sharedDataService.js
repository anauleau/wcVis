/**
 * This service is to share the data throughout the other controllers
 */
worldCupApp.service('sharedData', ['dataService', '$q',
    function (dataService, $q) {

        // Data object returned in by sharedData service
        var data = {
            teams: {
                list: undefined
            },
            tournaments: {
                list: undefined
            }
        };

        // Returns promise when teams attached to shared data, used to manage async data request
        function _getTeams() {
            var defer = $q.defer();

            if (data.teams.list) {
                defer.resolve(data.teams);
            } else {
                dataService.getTeams().then(function (teams) {
                    data.teams.list = teams;
                    defer.resolve(data.teams);
                });
            }
            return defer.promise;
        };

        // Returns promise when tournaments attached to shared data, used to manage async data request
        function _getTournaments() {
            var defer = $q.defer();

            if (data.tournaments.list) {
                defer.resolve(data.tournaments);
            } else {
                dataService.getTournaments().then(function (tournaments) {
                    data.tournaments.list = tournaments;
                    defer.resolve(data.tournaments);
                });
            }
            return defer.promise;
        };

        return {
            getTeams: _getTeams,
            getTournaments: _getTournaments,
            teams: data.teams,
            tournaments: data.tournaments
        };
    }]);