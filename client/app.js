angular.module('wolfstreet', [
    'wolfstreet.services',
    'wolfstreet.dashboard',
    'wolfstreet.stocks',
    'ngRoute',
    'highcharts-ng',
    'ngMaterial',
    'chart.js'
  ])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('indigo');
  })
  .config(function($routeProvider, $httpProvider) {
    $routeProvider
      .when('/dashboard', {
        templateUrl: 'dashboard/dashboard.html',
      })
      .when('/stocks', {
        templateUrl: 'stocks/stocks.html',
      })
      .otherwise({
        redirectTo: '/dashboard'
      });
  });
