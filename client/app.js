angular.module('wolfstreet', [
    'wolfstreet.services',
    'wolfstreet.dashboard',
    'wolfstreet.stocks',
    'ngRoute',
    'highcharts-ng',
    'ngMaterial'
  ])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .dark();
  })
  .config(function($routeProvider, $httpProvider) {
    $routeProvider
      .when('/dashboard', {
        templateUrl: 'dashboard/dashboard.html',
        // controller: 'DashboardController',
      })
      .when('/stocks', {
        templateUrl: 'stocks/stocks.html',
        // controller: 'StocksController',
      })
      .otherwise({
        redirectTo: '/dashboard'
      });
  });
