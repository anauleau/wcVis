/**
 * This method is to share the data
 */
worldCupApp.service('sharedData', ['dataService',
    function (dataService) {

        var data = {
            teams: {
                list: {}
            }
        }

        // Load teams into the parent
        dataService.getTeams().then(function (teams) {
            data.teams.list = teams;
        });

        return data;
    }]);