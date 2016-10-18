angular.module('wolfstreet.stocks', [])

.controller('StocksController', function($scope, Stocks) {
  $scope.searchData = [];

  $scope.searcher = function() {
    Stocks.lookUp($scope.searchText).then(function(data) {
      Stocks.addStock(angular.toJson(data));
      $scope.searchData.push(data);
    })
    $scope.searchData = angular.fromJson($scope.searchData);
    $scope.search = '';
  };
});
