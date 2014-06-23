/**
 * This service is to share the data throughout the other controllers
 */
worldCupApp.service('sharedData', ['dataService',
    function (dataService) {

        // Data object returned in by sharedData service
        var data = {
            teams: {
                list: {}
            },
            tournaments: {
                list: {}
            }
        };

        dataService.getTeams().then(function (teams) {
            data.teams.list = teams;
        });

        dataService.getTournaments().then(function (tournaments) {
            data.tournaments.list = tournaments;
        });

        return data;
    }]);