worldCupApp.config(function($routeProvider) {
    $routeProvider
      .when('/',
      {
        templateUrl: 'app.html',
        controller: 'AppCtrl'
      })
      .when('/tournamentSummaries', {
        templateUrl: 'views/tournamentGameSummaryView.html',
        controller: 'tournamentGameSummaryCtrl'
      })
});