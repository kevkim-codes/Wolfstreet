angular.module('wolfstreet', [
    'wolfstreet.services',
    'wolfstreet.dashboard',
    'wolfstreet.stocks',
    'ngRoute'
  ])
  .config(function($routeProvider, $httpProvider) {
    $routeProvider
      .when('/dashboard', {
        templateUrl: 'dashboard/dashboard.html',
        controller: 'StocksController',
      })
      .when('/stocks', {
        templateUrl: 'stocks/stocks.html',
        controller: 'ShortenController',
      })
      .otherwise({
        redirectTo: '/dashboard'
      });
  });
