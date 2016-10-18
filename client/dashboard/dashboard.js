angular.module('wolfstreet.dashboard', [])
  // Dashboard with stocks chosen
  .controller('dashboardController', function($scope, Stocks) {
    $scope.data = {};
    Stocks.getStocks().then(function(stocks) {
      console.log(stocks);
      $scope.data = angular.fromJson(stocks);
    });
  })

// Graph for US Stock Data
.controller('highchartsController', function($scope, Stocks) {
  $scope.usaData = [];

  $scope.chartConfig = {
    options: {
      chart: {
        type: 'column'
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
  };

  $scope.areaConfig = {
    options: {
      chart: {
        type: 'area'
      }
    },
    series: [{
      name: 'USA',
      data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
        1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
        27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
        26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
        24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
        22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
        10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104
      ]
    }, {
      name: 'USSR/Russia',
      data: [null, null, null, null, null, null, null, null, null, null,
        5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
        4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
        15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
        33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
        35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
        21000, 20000, 19000, 18000, 18000, 17000, 16000
      ]
    }],
    title: {
      text: 'Russia vs. U.S.'
    },
    xAxis: {
      text: 'Market Cap'
    },
    yAxis: {
      title: {
        text: 'Exchange rate'
      }
    },
  };

  $scope.usdChartConfig = {

    chart: {
      type: 'line'
    },

    title: {
      text: 'Trending Forecast'
    },

    yAxis: [{
      className: 'highcharts-color-0',
      title: {
        text: 'Primary axis'
      }
    }, {
      className: 'highcharts-color-1',
      opposite: true,
      title: {
        text: 'Secondary axis'
      }
    }],
    series: [{
      data: [1, 3, 2, 4]
    }, {
      data: [324, 124, 547, 221],
      yAxis: 1
    }]
  };

  $scope.pieChartConfig = {
    options: {
      chart: {
        type: 'pie'
      }
    },
    title: {
      text: 'U.S. Industries'
    },
    series: [{
      data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
      center: ['20%'],
      name: 'foo'
    }, {
      data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
      center: ['80%'],
      name: 'bar'
    }],
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: false
        }
      }
    }
  };

  //end of object
})
