worldCupApp.config(function($routeProvider) {
    $routeProvider
      .when('/',
      {
        templateUrl: 'app.html',
        controller: 'AppCtrl'
      })
      .when('/tournamentArrays', {
        template: 'tournamentGameSummaryView.html',
        controller: 'tournamentGameSummaryCtrl.js'
      })
});