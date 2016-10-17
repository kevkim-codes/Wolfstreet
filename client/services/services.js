angular.module('wolfstreet.services', [])

.factory('Stocks', function($http) {

  var lookUp = function() {
    return $http({
        method: 'GET',
        url: 'http://dev.markitondemand.com/Api/v2/Lookup',
        config: 'application/json'
      })
      .then(function(response) {
        return response.data;
      });
  };

  var usaGraph = function() {
    return $http({
        method: 'GET',
        url: 'http://dev.markitondemand.com/Api/v2/InteractiveChart',
        config: 'application/json'
      })
      .then(function(response) {
        return response.data;
      });
  };

  // var getAll = function() {
  //   return $http({
  //       method: 'GET',
  //       url: '/api/stocks'
  //     })
  //     .then(function(response) {
  //       return response.data;
  //     });
  // };

  var addOne = function(stock) {
    return $http({
      method: 'POST',
      url: '/api/stocks',
      data: stock
    });
  };

  return {
    lookUp: lookUp,
    addOne: addOne,
    usaGraph: usaGraph
    // getAll: getAll
  };
});
