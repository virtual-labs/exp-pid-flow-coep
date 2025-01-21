function Datasheet(){

	var htm=''
	 +' <div class="row">'

	 +' <!-- Tabs and Content Container -->'
	 +'  <ul class="nav nav-tabs" id="dynamicTabs" role="tablist"></ul>'
	 +'  <div class="tab-content" id="dynamicTabContent"></div>'
	 +'</div>'
	 +' <button id="generatePdf" class="btn btn-danger" style=" float: right; margin-top: 10px;">Download</button>'
	 
$("#datasheetBody").html(htm);


      // Clear existing tabs and content
      $('#dynamicTabs').empty();
      $('#dynamicTabContent').empty();

      for (let i = 0; i < dataArr.length; i++) {
    	  // Add tab
    	  const activeClass = i === 0 ? 'active' : ''; // Activate the first tab
    	  const tabItem = `
    	    <li class="nav-item" role="presentation">
    	      <button class="nav-link ${activeClass}" id="tab-${i}" data-bs-toggle="tab" data-bs-target="#content-${i}" type="button" role="tab">
    	        Test cycle - ${i + 1}
    	      </button>
    	    </li>`;
    	  $('#dynamicTabs').append(tabItem);

    	  // Generate table rows dynamically
    	  let rows = ` `;
    	  for (let j = 0; j < dataArr[i].upwt.length; j++) {
    	    rows += `
    	      <tr>
    	        <td>${j + 1}</td>
    	        <td>${dataArr[i].upwt[j]}</td>
    	        <td>${dataArr[i].sensor[j].contv}</td>
    	        <td>${dataArr[i].sensor[j].motor}</td>
    	        <td>${dataArr[i].sensor[j].mv}</td>
    	        <td>${dataArr[i].sensor[j].ov}</td>
    	        <td>${dataArr[i].sensor[j].pv}</td>
    	        <td>${dataArr[i].sensor[j].tv}</td>
    	        <td>${dataArr[i].sensor[j].uv}</td>
    	        <td>${dataArr[i].sensor[j].vv}</td>
    	      </tr>`;
    	  }

    	  // Add tab content
    	  const tabContent = `
    	    <div class="tab-pane fade ${activeClass ? 'show active' : ''}" id="content-${i}" role="tabpanel">
    	    <h4> Test cycle - ${i + 1}</h4>
    	      <table class="table table-bordered mt-3"  style="overflow-y: auto; overflow-x: auto;">
    	        <thead>
    	          <tr>
    	            <th>Sr no</th>
    	            <th>Load Cell</th>
    	            <th>Control Valve</th>
    	            <th>Motor</th>
    	            <th>MV</th>
    	            <th>OV</th>
    	            <th>PV</th>
    	            <th>TV</th>
    	            <th>UV</th>
    	            <th>VV</th>
    	          </tr>
    	        </thead>
    	        <tbody>
    	          ${rows}
    	        </tbody>
    	      </table>
    	    </div>`;
    	  $('#dynamicTabContent').append(tabContent);
    	}
      
      
      
      document.getElementById('generatePdf').addEventListener('click', function () {
    	    const { jsPDF } = window.jspdf; // Access jsPDF library
    	    const doc = new jsPDF();

    	    const tables = document.querySelectorAll('#dynamicTabContent .table'); // Select all tables
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

    	    doc.save('Flow_sensor_test_cycles.pdf'); // Download the generated PDF
    	  });
}
	
