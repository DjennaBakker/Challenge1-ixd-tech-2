window.onload = function () {

//Code voor voertuig informatie (area 1)
google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Brandstof', 49],
    ['Snelheid', 75],
  ]);

  var options = {
    width: 300, height: 300,
    redFrom: 90, redTo: 100,
    yellowFrom:75, yellowTo: 90,
    minorTicks: 5
  };

  var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

  chart.draw(data, options);
  }

// Code voor de voorraden (area 2)
google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawStuff);

  function drawStuff() {
    var data = new google.visualization.arrayToDataTable([
      ['Move', 'Percentage'],
      ['Voedsel', 75],
      ['Water', 88],
    ]);

    var options = {
      width: 320,
      legend: { position: 'none' },

      axes: {
        x: {
          0: { side: 'top', label: 'Voorraden in %'} // Top x-axis.
        }
      },
    };

    var chart = new google.charts.Bar(document.getElementById('top_x_div'));
    // Convert the Classic options to Material options.
    chart.draw(data, google.charts.Bar.convertOptions(options));
  };

// Code voor Voertuig omgeving (area 3)
    var zwaartekracht = [100, 100, 100, 90, 85, 87, 73, 62, 54, 39, 21, 15]
    
    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      theme: "light2",
      title:{
        text: "Zwaartekracht niveau in %"
      },

      axisY:{
        includeZero: false
      },
      data: [{        
        type: "line",       
        dataPoints: [
          { y: zwaartekracht[0] },
          { y: zwaartekracht[1] },
          { y: zwaartekracht[2] },
          { y: zwaartekracht[3] },
          { y: zwaartekracht[4] },
          { y: zwaartekracht[5] },
          { y: zwaartekracht[6] },
          { y: zwaartekracht[7] },
          { y: zwaartekracht[8] },
          { y: zwaartekracht[9] },
          { y: zwaartekracht[10] },
          { y: zwaartekracht[11] }
        ]
      }]
    });
  chart.render();

// Code voor aantal personen (area 4)
am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.PieChart);

chart.data = [ {
  "person": "Mannen",
  "aantal": 40
}, {
  "person": "Vrouwen",
  "aantal": 51
}, {
  "person": "Kinderen",
  "aantal": 10
}];

var pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "aantal";
pieSeries.dataFields.category = "person";
pieSeries.slices.template.stroke = am4core.color("#fff");
pieSeries.slices.template.strokeWidth = 2;
pieSeries.slices.template.strokeOpacity = 1;

pieSeries.hiddenState.properties.opacity = 1;
pieSeries.hiddenState.properties.endAngle = -90;
pieSeries.hiddenState.properties.startAngle = -90;

// Einde code van window.onload  
}
