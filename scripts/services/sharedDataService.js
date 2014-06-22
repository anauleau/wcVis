/**
 * This service is to share the data throughout the other controllers
 */
worldCupApp.service('sharedData', ['dataService',
    function (dataService) {

        var data = {
            teams: {
                list: {}
            }
        }

        dataService.getTeams().then(function (teams) {
            data.teams.list = teams;
        });

        return data;
    }]);