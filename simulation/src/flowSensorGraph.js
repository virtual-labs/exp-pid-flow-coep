function flowSensorGraph(sensorData1, i) {
    // Ensure we have a valid sensorData1 object

    let sensorData = JSON.parse(JSON.stringify(sensorData1));
    console.log(sensorData); // Check the data before proceeding

    // Ensure tt7 is not empty or undefined
    const categories = sensorData.map(data => data.tv);
    console.log(categories); // Check categories before using them

    // Extracting other tt values as separate arrays
    const tt1Data = sensorData.map(data => parseFloat(data.tv));
    const tt2Data = sensorData.map(data => parseFloat(data.vv));
    const tt3Data = sensorData.map(data => parseFloat(data.mv));
    const tt4Data = sensorData.map(data => parseFloat(data.pv));
    const tt5Data = sensorData.map(data => parseFloat(data.uv));
    const tt6Data = sensorData.map(data => parseFloat(data.ov));

    // Check the extracted data arrays
    console.log(tt1Data); // tt1 values
    console.log(tt2Data); // tt2 values
    console.log(tt3Data); // tt3 values
    console.log(tt4Data); // tt4 values
    console.log(tt5Data); // tt5 values
    console.log(tt6Data); // tt6 values

var downloadGraphBtn='graphBtn'+i;
var btnadd='<button id="GraphDataButton'+(i+1)+'" class="btn btn-danger" style="margin-bottom:10px;float:right;">Download test Cycle report - '+(i+1)+'</button>'
	$("#"+downloadGraphBtn).html(btnadd);		

 var count=parseInt(i+1);
			$('#GraphDataButton'+count).on('click', function() {
				console.log("Clickiuyrotigjdfoigj");
//				$('#saveAsJpg').prop("hidden",true);
				
			    html2canvas(document.querySelector('#RowDiv'+count)).then(canvas => {
			        // Append the screenshot canvas to the body
			        document.body.appendChild(canvas);
			        $("canvas").css("display","none");
			        // Optionally save the screenshot as an image
			        var link = document.createElement('a');
			        link.download = 'Flow_sensor_test_cycle '+i+' graph.png';
			        link.href = canvas.toDataURL();
			        link.click();
			    });
			});
			
    // Dynamically create the div ID for the graph
    const graphDiv = 'sensorGraphCold' + i;
    var TestCycleCount=parseInt(i+1);
    
    const chart = Highcharts.chart(graphDiv, {
    	credits: { enabled: false},
        chart: {
            type: 'line',
            backgroundColor: '#f4f4f4'
        },
        title: {
            text: 'TEST CYCLE - '+(i+1)
        },
        xAxis: {
            categories: categories,
            title: {
                text: 'TV'
            }
        },
        yAxis: {
            title: {
                text: 'Values'
            }
        },
        tooltip: {
            shared: true,
            crosshairs: true
        },
        series: [
            { name: 'tv', data: tt1Data, color: '#FF6384' },
            { name: 'vv', data: tt2Data, color: '#36A2EB' },
            { name: 'mv', data: tt3Data, color: '#CC65FE' },
            { name: 'pv', data: tt4Data, color: '#FFCE56' },
            { name: 'uv', data: tt5Data, color: '#4BC0C0' },
            { name: 'ov', data: tt6Data, color: '#4BC0C0' },
        ]
    });

    // Handle checkbox toggle for series visibility
    $('.toggle-series').on('change', function () {
        const seriesIndex = $(this).data('series');
        const isVisible = $(this).is(':checked');
        chart.series[seriesIndex].setVisible(isVisible, false); // Toggle visibility
        chart.redraw(); // Redraw chart for better performance
    });
}

