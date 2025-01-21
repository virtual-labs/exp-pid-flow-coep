	
	
		$("#simDemo").click(function () {

			 $("#modelDialog").removeClass("modal-md");
			 $("#modelDialog").addClass("modal-xl");
			htm=''
				+'<div class="row" >'
				+'<div class="container main-container">'
				+' <h5 class="text-center" style="color: #f8f9fa;background-color: #343a40;padding-bottom:10px;padding-top:10px">PROBLEM STATEMENT</h5>'
				+'<ul class="nav nav-tabs" id="tabMenu" role="tablist">'
				+'  <li class="nav-item">'
				+'    <button class="nav-link active" id="customer-tab1" data-bs-toggle="tab" data-bs-target="#customer1" type="button" role="tab" aria-controls="customer1" aria-selected="true">Customer Requirements</button>'
				+'  </li>'
				+'  <li class="nav-item">'
				+'    <button class="nav-link" id="operation-tab1" data-bs-toggle="tab" data-bs-target="#operation1" type="button" role="tab" aria-controls="operation1" aria-selected="false">Operational Requirements</button>'
				+'  </li>'
				+' </ul>'
				+' <div class="tab-content mt-3" id="tabContent">'
//				+'   <!-- Customer Requirements -->'
				+'<div class="tab-pane fade show active" id="customer1" role="tabpanel" aria-labelledby="customer-tab1">'
//				+'    <h2 class="tab-title">Customer Requirements</h2>'
				+'   <p style="    font-size: 18px;">The customer intends to set up a flow calibration facility to test the following types of flow sensors:</p>'
				+'<p style="    font-size: 18px;"> Customer Requirements: (Design and development of Flow sensor calibration facility)'
				+' The customer intends to set-up a flow calibration facility which will test flow sensors of following types as minimum requirement.'
				+' For all the sensors the process connection will be either ½” NPT (F), screwed type OR flange type. '
				+' The flow range will be from 10 LPH to 10,000 LPH.</p>'
				+'<br>'
				+'    <ul class="list-group">'
				+'     <li class="list-group-item">1. Orifice sensor</li>'
				+'     <li class="list-group-item">2. Venturi sensor</li>'
				+'     <li class="list-group-item">3. Pitot Tube sensor</li>'
				+'     <li class="list-group-item">4. Ultrasonic flow sensor</li>'
				+'     <li class="list-group-item">5. Magnetic flow sensor</li>'
				+'     <li class="list-group-item">6. Turbine type flow meter</li>'
				+'     <li class="list-group-item">7. Provision for any other type of flow sensor</li>'
				+'   </ul>'
				+' </div>'
//				+' <!-- Operational Requirements -->'
				+'  <div class="tab-pane fade" id="operation1" role="tabpanel" aria-labelledby="operation-tab1">'
//				+'   <h2 class="tab-title">Operational Requirements</h2>'
				+'   <ul class="list-group">'
				+'     <li class="list-group-item">1. Minimum fluid is to be used for testing of the sensors</li>'
				+'     <li class="list-group-item">2. The process of characterizing sensors must be fully automated</li>'
				+'     <li class="list-group-item">3. Set-up should continue from the last reading after power failure</li>'
				+'     <li class="list-group-item">4. Provision to reduce fluid turbulence</li>'
				+'     <li class="list-group-item">5. Multi-point calibration (selected by the customer)</li>'
				+'     <li class="list-group-item">6. Testing based on two standards</li>'
				+'     <li class="list-group-item">7. The set-up should test three sensors at a time</li>'
				+'     <li class="list-group-item">8. Duration of the test should not exceed two hours</li>'
				+'     <li class="list-group-item">9. Provision for dynamic characteristics</li>'
				+'     <li class="list-group-item">10. Provision to check plant health before starting tests</li>'
				+'     <li class="list-group-item">11. Automated analysis and reporting with validation</li>'
				+'     <li class="list-group-item">12. Reports stored for at least one year</li>'
				+'     <li class="list-group-item">13. Visualization tools for operators</li>'
				+'     <li class="list-group-item">14. Role-based reporting and dashboards</li>'
				+'     <li class="list-group-item">15. Financial sustainability pointers</li>'
				+'     <li class="list-group-item">16. Role-based alarms for critical parameters</li>'
				+'   </ul>'
				+'   </div>'
			+' </div>'
			    +' </div>'
				+'</div>'
			$("#proStrBody").html(htm);
			
		});
			$("#procedure").click(function () {
				 $("#modelDialog").removeClass("modal-xl");
				 $("#modelDialog").addClass("modal-md");
				$("#modalTitle").html("PROCEDURE");
				htm=''
					+' '
				$("#proStrBody").html(htm);
			});
				
	