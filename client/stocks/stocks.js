angular.module('wolfstreet.stocks', [])

.controller('StocksController', function($scope, Stocks) {
  $scope.searchData = [];
  $scope.series = [];
  $scope.data = [];

  $scope.searcher = function() {
    Stocks.lookUp($scope.searchText).then(function(data) {
        Stocks.addStock(angular.toJson(data));
        $scope.searchData.push(data);
        $scope.series.push(data.Name);
        var bubble = {};
        bubble['x'] = data.MarketCap / 100000000;
        bubble['y'] = data.ChangePercent * 100;
        bubble['r'] = data.Volume / 1000000;
        var arr = [];
        arr.push(bubble);
        console.log(bubble);
        $scope.data.push(arr);
      })
      // $scope.searchData = angular.fromJson($scope.searchData);
    $scope.searchText = '';
  };
  //end of object
});
