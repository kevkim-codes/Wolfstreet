angular.module('wolfstreet.services', [])

.factory('Stocks', function($http, $q) {
  return {
    lookUp: function(symbol) {
      var deferred = $q.defer();

      $http({
          method: 'GET',
          url: 'https://www.google.com/finance/info?q=' + symbol,
        })
        .success(function(response) {
          deferred.resolve(response);
        });
      return deferred.promise;
    },

    usaGraph: function() {
      return $http({
          method: 'GET',
          symbol: 'goog',
          url: 'http://dev.markitondemand.com/Api/v2/InteractiveChart/json',
        })
        .then(function(response) {
          return response.data;
        });
    },

    getStocks: function() {
      var deferred = $q.defer();

      $http({
          method: 'GET',
          url: '../stocks.json'
        })
        .success(function(response) {
          deferred.resolve(response);
        });
        return deferred.promise;
    },

    // addStock: function(stock) {
    //   return $http({
    //     method: 'POST',
    //     url: '../stocks.json',
    //     data: stock
    //   });
    // }


    //end of object
  }
});
