angular.module('wolfstreet.stocks', [])

.controller('StocksController', function($scope, Stocks) {
  $scope.searchData = Stocks.searchData;

  $scope.adder = function() {
    Stocks.lookUp($scope.search).then(function(data) {
      // Stocks.addStock(angular.toJson(data));
      Stocks.searchData.push(data);
      // $scope.searchData = Stocks.searchData;
    })
    $scope.search = '';
  };
});
