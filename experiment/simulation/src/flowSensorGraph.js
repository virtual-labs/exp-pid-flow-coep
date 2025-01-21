function graphTabs() {
  // HTML for the graph container and tabs
  var htm = ''
    + '<ul class="nav nav-tabs" id="dynamicTabs1" role="tablist"></ul>'
    + '<div class="tab-content" id="dynamicTabContent1"></div>';

  // Insert the HTML into the target container
  $("#trends1").html(htm);

  // Ensure dataArr exists and has content
  if (!Array.isArray(dataArr) || dataArr.length === 0) {
    console.error("dataArr is empty or not defined.");
    $("#bodyTrends").append("<p class='text-danger'>No data available to display.</p>");
    return;
  }

  // Clear existing tabs and content
  $('#dynamicTabs1').empty();
  $('#dynamicTabContent1').empty();

  // Iterate through dataArr to create tabs and graphs
  for (let i = 0; i < dataArr.length; i++) {
    // Add a tab for each cycle
    const activeClass = i === 0 ? 'active' : ''; // Activate the first tab
    const tabItem = `
      <li class="nav-item" role="presentation">
        <button class="nav-link ${activeClass}" id="tab-${i}" data-bs-toggle="tab" data-bs-target="#content-${i}" type="button" role="tab" aria-controls="content-${i}" aria-selected="${i === 0}">
          Test cycle - ${i + 1}
        </button>
      </li>`;
    $('#dynamicTabs1').append(tabItem);

    // Generate arrays for Highcharts
    let tvArray = [];
    let vvArray = [];
    let mvArray = [];
    let pvArray = [];
    let uvArray = [];
    let ovArray = [];

    // Check if the current item has a "sensor" array
    if (!Array.isArray(dataArr[i].sensor) || dataArr[i].sensor.length === 0) {
      console.error(`No sensor data for cycle ${i + 1}`);
      continue;
    }

    // Populate arrays with sensor data
    dataArr[i].sensor.forEach(item => {
      tvArray.push(parseFloat(item.tv)); // Convert strings to numbers
      vvArray.push(parseFloat(item.vv));
      mvArray.push(parseFloat(item.mv));
      pvArray.push(parseFloat(item.pv));
      uvArray.push(parseFloat(item.uv));
      ovArray.push(parseFloat(item.ov));
    });

    // Add content for the tab
    const tabContent = `
      <div class="tab-pane fade ${activeClass ? 'show active' : ''}" id="content-${i}" role="tabpanel" aria-labelledby="tab-${i}">
        <div id="chart-${i}" style="width:100%; height:400px;"></div>
      </div>`;
    $('#dynamicTabContent1').append(tabContent);

    // Initialize the Highcharts graph for each tab
    Highcharts.chart(`chart-${i}`, {
      chart: {
        type: 'line',
        backgroundColor: '#f4f4f4'
      },
      exporting: { enabled: false },
      credits: { enabled: false },
      title: {
        text: `Flow Sensor Data - Test Cycle ${i + 1}`
      },
      xAxis: {
        categories: tvArray,
        title: {
          text: 'Standard Readings (tv)'
        }
      },
      yAxis: {
        title: {
          text: 'Observation Readings'
        }
      },
      tooltip: {
        shared: true,
        crosshairs: true
      },
      series: [
        { name: 'Venturi Meter', data: vvArray, color: '#FF6384' },
        { name: 'Electromagnetic Flow Meter', data: mvArray, color: '#36A2EB' },
        { name: 'Pitot Tube', data: pvArray, color: '#CC65FE' },
        { name: 'Ultrasonic Flow Meter', data: uvArray, color: '#FFCE56' },
        { name: 'Orifice Valve', data: ovArray, color: '#4BC0C0' },
        { name: 'Turbine Flow Meter', data: tvArray, color: '#000080' }
      ]
    });
  }

  // Add functionality to generate a PDF
  document.getElementById('generatePdf').addEventListener('click', function () {
    const { jsPDF } = window.jspdf; // Access jsPDF library
    const doc = new jsPDF();

    const tables = document.querySelectorAll('#dynamicTabContent1 .table'); // Select all tables
    tables.forEach((table, index) => {
      if (index > 0) {
        doc.addPage(); // Add a new page for each table after the first
      }
      doc.autoTable({
        html: table, // Generate PDF table from HTML table
        theme: 'grid', // Optional: Table styling (striped, grid, plain)
        startY: 10, // Starting Y position
        margin: { top: 10, bottom: 10 }, // Optional margins
      });
    });

    doc.save('Level_sensor_test_cycles.pdf'); // Download the generated PDF
  });
}
