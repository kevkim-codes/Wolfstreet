angular.module('wolfstreet.services', [])

.factory('Stocks', function($http) {
  return {
    lookUp: function(symbol) {
      return $http({
          method: 'GET',
          url: 'https://www.google.com/finance/info?q=' + symbol,
        })
        .then(function(response) {
          return response.data;
        });
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

    // var getAll = function() {
    //   return $http({
    //       method: 'GET',
    //       url: '/api/stocks'
    //     })
    //     .then(function(response) {
    //       return response.data;
    //     });
    // };

      addStock: function(stock) {
      return $http({
        method: 'POST',
        url: '/api/stocks',
        data: stock
      });
    },
  }
});
