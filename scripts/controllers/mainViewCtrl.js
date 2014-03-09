worldCupApp.controller('mainViewCtrl', ['$scope', 'dataService',
    function ($scope, dataService) {
        var appearances = [], dataByTourney;

        dataService.getAppearances().then(function(data) {         
            angular.forEach(data, function(value, key) {
                appearances.push({country: key, total: value});
            });
            appearances.sort(function (a, b) {
                if (a.country > b.country)
                  return 1;
                if (a.country < b.country)
                  return -1;
                // a must be equal to b
                return 0;
            });
            var margin = {top: 20, right: 20, bottom: 30, left: 40},
                width = 960 - margin.left - margin.right,
                height = 500 - margin.top - margin.bottom;

            var x = d3.scale.ordinal()
                .rangeRoundBands([0, width], .1);

            var y = d3.scale.linear()
                .range([height, 0]);

            var xAxis = d3.svg.axis()
                .scale(x)  
                .orient("bottom");

            var yAxis = d3.svg.axis()
                .scale(y)
                .orient("left")
                .ticks(10);

            var svg = d3.select("#area").append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                x.domain(appearances.map(function(d) { return d.country; }));
                y.domain([0, d3.max(appearances, function(d) { return d.total; })]);

          svg.append("g")
              .attr("class", "x axis")
              .attr("transform", "translate(0," + height + ")")
              .attr("writing-mode", "tb-rl")
              .call(xAxis);

          svg.append("g")
              .attr("class", "y axis")
              .call(yAxis)
            .append("text")
              .attr("y", 6)
              .attr("dy", ".71em")
              .style("text-anchor", "end")
              .text("Total");

          svg.selectAll(".bar")
              .data(appearances)
            .enter().append("rect")
              .attr("class", "bar")
              .attr("x", function(d) { return x(d.country); })
              .attr("width", x.rangeBand())
              .attr("y", function(d) { return y(d.total); })
              .attr("height", function(d) { return height - y(d.total); });

            function type(d) {
              d.total = +d.total;
              return d;
            }
        });

        dataService.getDataByTourney().then(function(data) {
            dataByTourney = data;
        });
    }]);