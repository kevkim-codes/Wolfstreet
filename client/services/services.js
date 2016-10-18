angular.module('wolfstreet.services', [])

.factory('Stocks', function($http, $q) {
  return {
    lookUp: function(symbol) {
      var deferred = $q.defer();

      $http({
          method: 'GET',
          url: 'http://dev.markitondemand.com/MODApis/Api/v2/Quote?symbol=' + symbol
        })
        .success(function(response) {
          deferred.resolve(response);
        });
      return deferred.promise;
    },
    searchData: [],

    getStocks: function() {
      var deferred = $q.defer();

      $http({
          method: 'GET',
          // url: '../stocks.json'
          url: '/api/stocks'
        })
        .success(function(response) {
          deferred.resolve(response);
        });
      return deferred.promise;
    },

    addStock: function(stock) {
      return $http({
        method: 'POST',
        url: '../stocks.json',
        data: stock
      });
    }

    // usaGraph: function() {
    //   return $http({
    //       method: 'GET',
    //       symbol: 'goog',
    //       url: 'http://dev.markitondemand.com/Api/interactive?parameters={"Normalized":false,"StartDate":"2013-07-15T00:00:00-00","EndOffsetDays":100,"NumberOfDays":100,"DataPeriod":"Day","DataInterval":0,"LabelPeriod":"Day","LabelInterval":1,"ExtraPoints":0,"Elements":[{"Symbol":"AAPL","ElementType":"price","Params":["ohlc"]}],"RealTime":false}',
    //     })
    //     .then(function(response) {
    //       return response.data;
    //     });
    // },

    //end of object
  }
});
