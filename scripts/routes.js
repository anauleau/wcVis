worldCupApp.config(function($routeProvider) {
    $routeProvider
      .when('/',
      {
        templateUrl: 'views/searchHome.html',
        controller: 'homeCtrl'
      })
      .when('/tournamentSummaries', {
        templateUrl: 'views/tournamentGameSummaryView.html',
        controller: 'tournamentGameSummaryCtrl'
      })
});