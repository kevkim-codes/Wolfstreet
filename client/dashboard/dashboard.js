angular.module('wolfstreet.dashboard', [])
// Dashboard with stocks chosen
.controller('dashboardController', function($scope, Stocks) {
  $scope.data = {};
  Stocks.getStocks().then(function(stocks) {
      $scope.data = angular.fromJson(stocks);
  });
})


// Graph for US Stock Data
.controller('highchartsController', function($scope, Stocks) {
  $scope.usaData = [];

  $scope.chartConfig = {
    options: {
      chart: {
        type: 'bar'
      }
    },
    series: [{
      data: [10, 15, 12, 8, 7, 3, 10]
    }],
    title: {
      text: 'U.S. Stocks'
    },
    xAxis: {
      text: 'Market Cap'
    },
    yAxis: {
      title: {
        text: 'Exchange rate'
      }
    },
    loading: false
  }
});
