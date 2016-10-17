angular.module('wolfstreet', [
    'wolfstreet.services',
    'wolfstreet.dashboard',
    'wolfstreet.stocks',
    'ngRoute',
    'highcharts-ng'
  ])
  .config(function($routeProvider, $httpProvider) {
    $routeProvider
      .when('/dashboard', {
        templateUrl: 'dashboard/dashboard.html',
        controller: 'StocksController',
      })
      .when('/stocks', {
        templateUrl: 'stocks/stocks.html',
        controller: 'StocksController',
      })
      .otherwise({
        redirectTo: '/dashboard'
      });
  });
