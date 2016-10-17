angular.module('wolfstreet.dashboard', [])

.controller('dashboardController', function($scope, Stocks) {

  $scope.data = [];

  var promiseData = function(stock) {
    Stocks.lookUp(stock)
      .then(function(response) {
        $scope.data.push(response);
      })
  };
  promiseData('aapl');

  $scope.stocks = $scope.data.join('').split('');
  console.log($scope.stocks);

  // var initializeLinks = function () {
  //   Links.getAll()
  //     .then(function (links) {
  //       $scope.data.links = links;
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // };

  // initializeLinks();

})

.controller('highchartsController', function($scope, Stocks) {
  $scope.usaData = [];

  // var promiseData = function () {
  //   Stocks.usaGraph()
  //   .then(function(response) {
  //     $scope.usaData.push(response);
  //   })
  // };
  // promiseData();
  // console.log($scope.usaData);

  $scope.chartConfig = {
    options: {
      chart: {
        type: 'line'
      }
    },
    series: [{
      data: [10, 15, 12, 8, 7]
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
