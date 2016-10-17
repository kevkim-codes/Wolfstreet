angular.module('wolfstreet.dashboard', [])

.controller('dashboardController', function($scope, Stocks) {

  $scope.data = {};

  $scope.initialMarket = 0;

  $scope.chart = {
    options: {
      chart: {
        type: 'bar'
      }
    },
    series: [{
      data: [10, 15, 12, 8, 7]
    }],
    title: {
      text: 'Hello'
    },
    loading: true
  }
});

.controller('myctrl', function($scope) {

  $scope.addPoints = function() {
    var seriesArray = $scope.highchartsNG.series
    var rndIdx = Math.floor(Math.random() * seriesArray.length);
    seriesArray[rndIdx].data = seriesArray[rndIdx].data.concat([1, 10, 20])
  };

  $scope.addSeries = function() {
    var rnd = []
    for (var i = 0; i < 10; i++) {
      rnd.push(Math.floor(Math.random() * 20) + 1)
    }
    $scope.highchartsNG.series.push({
      data: rnd
    })
  }

  $scope.removeRandomSeries = function() {
    var seriesArray = $scope.highchartsNG.series
    var rndIdx = Math.floor(Math.random() * seriesArray.length);
    seriesArray.splice(rndIdx, 1)
  }

  $scope.options = {
    type: 'line'
  }

  $scope.swapChartType = function() {
    if (this.highchartsNG.options.chart.type === 'line') {
      this.highchartsNG.options.chart.type = 'bar'
    } else {
      this.highchartsNG.options.chart.type = 'line'
    }
  }

  $scope.highchartsNG = {
    options: {
      chart: {
        type: 'bar'
      }
    },
    series: [{
      data: [10, 15, 12, 8, 7]
    }],
    title: {
      text: 'Hello'
    },
    loading: false
  };

});

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
});
