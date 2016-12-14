'use strict;'

/* ==平成26年一般会計・決算== */
/* =歳入= */
d3.csv("/tsuyama/revenue.csv", function(csvdata) {
  var dataset = [];
  var labelset = [];
  var max_width = 0;
  for(var count=0; count<csvdata.length; count++) {
    var money = parseInt(csvdata[count]["26年度決算"]
        .replace(/,/g, "")
        .replace(/－/g, "0"));
    var label = csvdata[count]["款"] + " " + money.toLocaleString() + "千円";
    if(max_width < money) {
      max_width = money;
    }
    dataset.push(money);
    labelset.push(label);
  }
  var canvas = d3.select("#h26gen-in");
  make(dataset, labelset, max_width, canvas);
});

/* =歳出= */
d3.csv("/tsuyama/expenditure.csv", function(csvdata) {
  var dataset = [];
  var labelset = [];
  var max_width = 0;
  for(var count=0; count<csvdata.length; count++) {
    var money = parseInt(csvdata[count]["26年度決算"]
        .replace(/,/g, "")
        .replace(/－/g, "0"));
    var label = csvdata[count]["款"] + " " + money.toLocaleString() + "千円";
    if(max_width < money) {
      max_width = money;
    }
    dataset.push(money);
    labelset.push(label);
  }
  var canvas = d3.select("#h26gen-out");
  make(dataset, labelset, max_width, canvas);
});

/* ==平成27年一般会計・決算== */
/* =歳入= */
d3.csv("/tsuyama/revenue.csv", function(csvdata) {
  var dataset = [];
  var labelset = [];
  var max_width = 0;
  for(var count=0; count<csvdata.length; count++) {
    var money = parseInt(csvdata[count]["27年度予算"]
        .replace(/,/g, "")
        .replace(/－/g, "0"));
    var label = csvdata[count]["款"] + " " + money.toLocaleString() + "千円";
    if(max_width < money) {
      max_width = money;
    }
    dataset.push(money);
    labelset.push(label);
  }
  var canvas = d3.select("#h27gen-in");
  make(dataset, labelset, max_width, canvas);
});

/* =歳出= */
d3.csv("/tsuyama/expenditure.csv", function(csvdata) {
  var dataset = [];
  var labelset = [];
  var max_width = 0;
  for(var count=0; count<csvdata.length; count++) {
    var money = parseInt(csvdata[count]["27年度予算"]
        .replace(/,/g, "")
        .replace(/－/g, "0"));
    var label = csvdata[count]["款"] + " " + money.toLocaleString() + "千円";
    if(max_width < money) {
      max_width = money;
    }
    dataset.push(money);
    labelset.push(label);
  }
  var canvas = d3.select("#h27gen-out");
  make(dataset, labelset, max_width, canvas);
});

function make(dataset, labelset, max_width, canvas) {
  var svg = canvas.append("svg")
    .attr({
      width: parseInt(max_width) / 8000 + 50,
      height: dataset.length * 30,
    });
  svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr({
      x : 0,
      y : function(d, i) { return 30 * i; },
      width : function(d) { return d/8000; },
      height : 25,
      fill : '#6fbadd'
    });
  svg.selectAll('text')
    .data(labelset)
    .enter()
    .append('text')
    .attr({
      x: 2,
      y: function(d, i) { return 20 + 30*i; },
    })
    .text(function(d) {
      return d;
    });
}

