angular.module("hackathon-starter").controller("D3ExampleCtrl", ['$scope', '$meteor', '$location', '$http', 'limitToFilter',
    function($scope, $meteor, $location, $http, limitToFilter) {
        document.title = "D3 Example";
        console.log("hi D3 Example");
         $scope.myData = [{
            name: 'AngularJS',
            count: 300
        }, {
            name: 'D3.JS',
            count: 150
        }, {
            name: 'jQuery',
            count: 400
        }, {
            name: 'Backbone.js',
            count: 300
        }, {
            name: 'Ember.js',
            count: 100
        }];        

    }
]).directive('crD3Bars', [

    function() {
        return {
            restrict: 'E',
            scope: {
                data: '='
            },
            link: function(scope, element) {
                var margin = {
                        top: 20,
                        right: 20,
                        bottom: 30,
                        left: 40
                    },
                    width = 480 - margin.left - margin.right,
                    height = 360 - margin.top - margin.bottom;

                var svg = d3.select(element[0])
                    .append("svg")
                    .attr('width', width + margin.left + margin.right)
                    .attr('height', height + margin.top + margin.bottom)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                var x = d3.scale.ordinal().rangeRoundBands([0, width], .1);
                var y = d3.scale.linear().range([height, 0]);

                var xAxis = d3.svg.axis()
                    .scale(x)
                    .orient("bottom");

                var yAxis = d3.svg.axis()
                    .scale(y)
                    .orient("left")
                    .ticks(10);

                //Render graph based on 'data'
                scope.render = function(data) {
                    //Set our scale's domains
                    x.domain(data.map(function(d) {
                        return d.name;
                    }));
                    y.domain([0, d3.max(data, function(d) {
                        return d.count;
                    })]);

                    //Redraw the axes
                    svg.selectAll('g.axis').remove();
                    //X axis
                    svg.append("g")
                        .attr("class", "x axis")
                        .attr("transform", "translate(0," + height + ")")
                        .call(xAxis);

                    //Y axis
                    svg.append("g")
                        .attr("class", "y axis")
                        .call(yAxis)
                        .append("text")
                        .attr("transform", "rotate(-90)")
                        .attr("y", 6)
                        .attr("dy", ".71em")
                        .style("text-anchor", "end")
                        .text("Count");

                    var bars = svg.selectAll(".bar").data(data);
                    bars.enter()
                        .append("rect")
                        .attr("class", "bar")
                        .attr("x", function(d) {
                            return x(d.name);
                        })
                        .attr("width", x.rangeBand());

                    //Animate bars
                    bars
                        .transition()
                        .duration(1000)
                        .attr('height', function(d) {
                            return height - y(d.count);
                        })
                        .attr("y", function(d) {
                            return y(d.count);
                        })
                };

                //Watch 'data' and run scope.render(newVal) whenever it changes
           
                scope.$watch('data', function() {
                  if( scope.data ){
                        scope.render(scope.data);
                      }
                  
                }, true);
            }
        };
    }
]).directive('crD3FluidPolygon', [

    
    function() {
        return {
            restrict: 'E',
            scope: {
                data: '='
            },
            link: function(scope, element) {
            var $container = element.parent(),
                width = ( $container.width() || 300 ) - 20,
                height = ( width / 3 ) - 20;

            var vertices = d3.range(100).map(function(d) {
                return [Math.random() * width, Math.random() * height];
            });

            var voronoi = d3.geom.voronoi()
                .clipExtent([
                    [0, 0],
                    [width, height]
                ]);

            var svg = d3.select(element[0]).append('svg')
                .attr('width', width)
                .attr('height', height)
                .on('mousemove', function() {
                    vertices[0] = d3.mouse(this);
                    redraw();
                });

            var path = svg.append('g').selectAll('path');

            svg.selectAll('circle')
                .data(vertices.slice(1))
                .enter().append('circle')
                .attr('transform', function(d) {
                    return 'translate(' + d + ')';
                })
                .attr('r', 1.5);

            redraw();

            function redraw() {
                path = path
                    .data(voronoi(vertices), polygon);

                path.exit().remove();

                path.enter().append('path')
                    .attr('class', function(d, i) {
                        return 'q' + (i % 9) + '-9';
                    })
                    .attr('d', polygon);

                path.order();
            }

            function polygon(d) {
                return 'M' + d.join('L') + 'Z';
            }
        
            }
        };
    }
]);