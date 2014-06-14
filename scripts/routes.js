worldCupApp.config(function($routeProvider) {
    $routeProvider
      .when('/',
      {
        templateUrl: 'views/summary.html',
        controller: 'summaryCtrl'
      })
      .when('/games', {
        templateUrl: 'views/games.html',
        controller: 'gamesCtrl'
      })
      .when('/teams', {
        templateUrl: 'views/teams.html',
        controller: 'teamsCtrl'
      })
      .when('/tournaments', {
          templateUrl: 'views/tournaments.html',
          controller: 'tournamentsCtrl'
      })
});