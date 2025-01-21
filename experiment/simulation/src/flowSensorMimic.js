var selectedValue;
var dataArr = [];
function flowSensorMimic(){
	
	
	$("#Header").html("	<center><span >SIMULATION</span></center>");
	$("#diagram").html("");
	
	htm=''
		+'<div class="row titlePart"  style="border-style: unset;padding:7px;">'
		+'<center><span >PROCESS MONITORING PANEL</span></center>'
		+'</div>'
	+'<div class="row">'
	 +' <div class="panel">'
	 +' <h5>Run Mode</h5>'
	 +' <div class="form-check form-check-inline">'
	 +'   <input class="form-check-input" type="radio" name="Mode" id="runModeCV" value="cv">'
	 +'   <label class="form-check-label radio-label" for="twoMinutes">Control Valve</label>'
	 +'  </div>'
  +'  <div class="form-check form-check-inline">'
  +'    <input class="form-check-input" type="radio" name="Mode" id="runModeM1" value="m1">'
  +'    <label class="form-check-label radio-label" for="threeMinutes">Motor</label>'
  +'  </div>'

//  +'	  <div id="selectedTime">Selected Time: None</div>'
  +'	</div>'
	+'</div>'
		+'<div class="row">'
		+'<div class="col-sm-6">'
		+'<button id="fillTankBtn" class="btn btn-danger" style="width:100%;margin-bottom:10px" data-toggle="modal" data-target="#myModal1" disabled>Fill Tank</button>'
		+'</div>'
		+'<div class="col-sm-6">'
		+'<button id="startBtn" class="btn btn-danger" style="width:100%;margin-bottom:10px" disabled>Start</button>'
		+'</div>'
		+'</div>'
		+'<div class="row">'
		+'<div class="col-sm-6">'
		+'<button id="datasheetBtn" class="btn btn-danger" style="width:100%;margin-bottom:10px" data-toggle="modal" data-target="#datasheetModel" disabled>View Datasheet</button>'
		+'</div>'
		+'<div class="col-sm-6">'
		+'<button type="button" class="btn btn-danger"  id="graph" style="width:100%;margin-bottom:10px" data-toggle="modal" data-target="#modalTrends1" disabled>Trends </button>'
		+'</div>'
		+'</div>'
		+'<div class="row titlePart"  style="border-style: unset;padding:7px;">'
		+'<center><span >READINGS</span></center>'
		+'</div>'
		+'<div class="row conf" >'
		+'<table class="table table-bordered">'
		+' <thead>'
//		+'  <tr>'
//		+'    <th>Firstname</th>'
//		+'   <th>Lastname</th>'
//		+'    <th>Email</th>'
//		+' </tr>'
		+'</thead>'
		+'<tbody>'
		+' <tr>'
		+'   <td><label><b>Motor :</b></label></td>'
		+'   <td><label class="PMCValue" id="motorVal1">0</label>%</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>Control Valve :</b></label></td>'
		+' <td><label class="PMCValue" id="cvVal1">0</label>%</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>Orifice Meter :</b></label></td>'
		+' <td><label class="PMCValue" id="orificeVal1">0</label>lph</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>Venturi Meter : </b></label></td>'
		+' <td><label class="PMCValue" id="venturiVal1">0</label>lph</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>Pitot Tube :  </b></label></td>'
		+' <td><label class="PMCValue" id="pitotVal1">0</label>lph</td>'
		+'  </tr>'
		
		+'  <tr>'
		+' <td><label><b>Electromagnetic Flow Meter :</b></label></td>'
		+' <td><label class="PMCValue" id="eleMagneticVal1">0</label>lph</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>Ultrasonic Flow Meter :</b></label></td>'
		+' <td><label class="PMCValue" id="ultrasonicVal1">0</label>lph</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>Turbine Flow Meter :</b></label></td>'
		+' <td><label class="PMCValue" id="turbineVal1">0</label>lph</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>Load Cell (WT) :</b></label></td>'
		+' <td><label class="PMCValue" id="lcWtVal1">240</label>Kg</td>'
		+'  </tr>'
		+'</tbody>'
		+'</table>'

		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<button type="button" class="btn btn-danger"  id="btnResult" style="margin-top:10px;width:100%" disabled>Result</button>'
		+'</div>'
		
		+'<div class="modal fade " id="datasheetModel">'
		+'<div class="modal-dialog modal-xl" >'
		+'<div class="modal-content">'
		+'<div class="modal-header">'
		+'<h4 class="modal-title"><center>Datasheet</center></h4>'
		+'<button type="button" class="close" data-dismiss="modal">&times;</button>'
		+'</div>'
		+'<div class="modal-body" id="datasheetBody">'
		+'</div>'
		+'<div class="modal-footer">'
//		+'<button type="button" class="btn btn-danger" data-dismiss="modal" >OK</button>'
		+'</div>'
		+'</div>'
		+'</div>'
		+'</div>'
		
		+'<div class="modal fade " id="modalTrends1">'
		+'<div class="modal-dialog modal-xl" >'
		+'<div class="modal-content">'
		+'<div class="modal-header">'
		+'<h4 class="modal-title"><center>Graph</center></h4>'
		+'<button type="button" class="close" data-dismiss="modal">&times;</button>'
		+'</div>'
		+'<div class="modal-body" id="trends1">'
		+'</div>'
		+'<div class="modal-footer">'
//		+'<button type="button" class="btn btn-danger" data-dismiss="modal" >OK</button>'
		+'</div>'
		+'</div>'
		+'</div>'
		+'</div>'
		
		
//		+'<div class="modal fade " id="modalTrends">'
//		+'<div class="modal-dialog modal-xl" >'
//		+'<div class="modal-content">'
//		+'<div class="modal-header">'
//		+'<h4 class="modal-title"><center></center></h4>'
//		+'<button type="button" class="close" data-dismiss="modal">&times;</button>'
//		+'</div>'
//		+'<div class="modal-body" id="bodyTrends">'
//		+'</div>'
//		+'<div class="modal-footer">'
////		+'       <button type="button" class="btn btn-danger"  id="download" style="margin-top:10px;float: right;" >Download </button>'
//	
////		+'<button type="button" class="btn btn-danger" data-dismiss="modal" >Ok</button>'
//		+'</div>'
//		+'</div>'
//		+'</div>'
//		+'</div>'
	$("#Selection").html(htm);
	 const radioButtons = document.querySelectorAll('input[name="Mode"]');
//	  const selectedTimeDiv = document.getElementById('selectedTime');
	  
	radioButtons.forEach(radio => {
	    radio.addEventListener('change', () => {
//	      selectedTimeDiv.textContent = `Selected Time: ${radio.value}`;
//	      console.log(${radio.value});
	    	$("#fillTankBtn").prop("disabled",false);
	    	selectedValue = $('input[name="Mode"]:checked').val();
	      console.log("on change event "+selectedValue);
//	      time = selectedValue;
	      runMode = selectedValue;
//			 console.log(" start time "+time);
			 console.log("selectedValue after start "+selectedValue);
//	      $('#selectedTime').text(`Selected Time: ${selectedValue}`);
	     
	    });
	  });
	 animateFlowSensor();
	
	$("#btnResult").click(function(){
		
//		flowSensorPostQuestion();
		
	});
	$("#graph").click(function(){
		console.log("graph call");
		graphTabs();
		
	});
	
	$("#datasheetBtn").on("click", function(){
//		var htm = ''
//		
//		htm += 'Hello'
//			+ dataArr
//		
//		$("#proStrBody").html(htm);
//		console.log(dataArr);
		Datasheet();
	});
	$('#download').on('click', function() {
		
//		$('#saveAsJpg').prop("hidden",true);
	    html2canvas(document.querySelector("#bodyTrends")).then(canvas => {
	        // Append the screenshot canvas to the body
	        document.body.appendChild(canvas);
	        $("canvas").css("display","none");
	        // Optionally save the screenshot as an image
	        var link = document.createElement('a');
	        link.download = 'FlowSensorGraph.png';
	        link.href = canvas.toDataURL();
	        link.click();
	    });
	});
}


var runMode = selectedValue;
function animateFlowSensor(){
			
	var data = {};
	var dataArrUp = [];
	var dataArrUpwt = [];
	var dataArrDownwt = [];
			var w = 1250;
			var h = 700;
//			var paper ;
			var x = 10, y = 20;

			if ($(window).width() < 500) {
				width = $(this).width();
				paper = new Raphael(document.getElementById('diagram'), '100%', '100%');
				paper.setViewBox(0, 0, w, h, true);
				paper.setSize('90%', '100%');
			} else {
				paper = new Raphael(document.getElementById('diagram'), '100%', '100%');
				paper.setViewBox(0, 0, w, h, true);
				paper.setSize('90%', '100%');
			}

			paper.clear();
			var time = 2000;
			var htb = -110;
		    var htb1 = 110;
		    var htt = -110;
		    var htt1 = 110;
		    var ptb = 20;
			var ptt = 20;
			var initFlg = false;
		    var color = '#a8f2f7';
		    var emptyColor = "#fff";
		    var txtColor = "#00cc88";
		   
		    
//		    var runMode = "m1";
		    runMode = selectedValue;
		    var loadCell = 1200;
		    var wt = loadCell/20;
		    var tankWt = 0;
		    var tareInit = wt*4;

			function tank(x, y) {
				paper.path('M' + (x ) + ' ' + (y ) + 'l 80 0 l 0 30 l 25 30 l 0 130 l -130 0 l 0 -130 l 25 -30 z').attr({ 'stroke': 'black', 'stroke-width': '2' });
			}
			
			tank((x+965), (y+50));
			tank((x+965), (y+400));
			
			var inletG = paper.image("images/svValveV2G.png", (x + 1090), (y + 349), 50, 40).attr({'transform': 'r' + 270});
			var inletR = paper.image("images/svValveV1R.png", (x + 1090), (y + 349), 50, 40).attr({'transform': 'r' + 270});
			inletG.hide();
			
			function tankDefaultFitting(x,y){
				paper.path('M' + (x+1180) + ' ' + (y+380) + 'l -155 0 l 0 80').attr({ 'stroke': '#818080', 'stroke-width': '8' });
				paper.image("images/tankInit.png", (x + 1050), (y + 330), 60, 100);
				inletR.toFront();
			} 
			
			tankDefaultFitting(x,y);
			
			function platform(x, y){
				paper.rect((x+905),(y+265), 200, 1).attr({"stroke":"#000","stroke-width":5}) ;
				paper.path('M' + (x+925) + ' ' + (y+266) + 'l -10 10 l 20 0 z').attr({"fill": "#000", "stroke":"#000","stroke-width":5});
				paper.path('M' + (x+1085) + ' ' + (y+266) + 'l -10 10 l 20 0 z').attr({"fill": "#000", "stroke":"#000","stroke-width":5});
			}
			
			platform(x,y);
			platform(x,(y+328));
			
			paper.path("M" + (x + 1005) + " " + (y + 240) + " l 0 160").attr({ "stroke-width": 20, "stroke": "#818080", "stroke-linejoin": "round"});
			
			paper.path("M" + (x + 1005) + " " + (y + 240) + " l 0 160").attr({ "stroke-width": 16, "stroke": "#fff", "stroke-linejoin": "round"});
			
			paper.path("M" + (x + 940) + " " + (y + 578) + " l -155 0  l -750 0 l 0 -550 l 650 0 l 320 0 l 0 80").attr({ "stroke-width": 20, "stroke": "#818080", "stroke-linejoin": "round" });
			
			paper.path("M" + (x + 940) + " " + (y + 578) + " l -155 0  l -750 0 l 0 -550 l 650 0 l 320 0 l 0 80").attr({ "stroke-width": 16, "stroke": "#fff", "stroke-linejoin": "round"});
			
			paper.text((x+860), (y+220), "Tare Reset =>").attr({'font-size':12,'font-weight':'bold'});
			var tareOn = paper.image("images/green.png", (x + 900), (y + 207), 30, 30);
			var tareOff = paper.image("images/red.png", (x + 900), (y + 207), 30, 30);
			
			paper.image("images/loadcell.png", (x + 1025), (y + 227), 50, 50); //dummy load cell
			
			paper.image("images/loadcell.png", (x + 935), (y + 227), 50, 50).transform("s-1,1"); //Reading load cell
			paper.text((x+890), (y+252), "WT(Load Cell)").attr({'font-size':12,'font-weight':'bold'});
			
			//	Electricity and air flow indicators
			paper.rect((x+150),(y+200),270,95,5);
			
			paper.text((x + 250), (y +225), "Electricity Status : ").attr({ 'font-size': 17, 'font-weight': 'bold' });
			var eleOn = paper.image("images/on.png", (x + 345), (y + 210), 55, 35).hide();
			var eleOff = paper.image("images/off.png", (x +345), (y + 210), 55, 35);

			paper.text((x + 250), (y + 265), "Air Flow Status : ").attr({ 'font-size': 17, 'font-weight': 'bold' });
			var airOn = paper.image("images/on.png", (x + 345), (y + 250), 55, 35).hide();
			var airOff = paper.image("images/off.png", (x + 345), (y + 250), 55, 35);
			
			paper.rect((x+450),(y+200),270,135,5);
			
			paper.text((x + 550), (y +225), "Start up phase : ").attr({ 'font-size': 17, 'font-weight': 'bold' });
			var stOn = paper.image("images/green.png", (x + 645), (y + 210), 40, 40);
			var stOff = paper.image("images/red.png", (x +645), (y + 210), 40, 40);
			
			paper.text((x + 550), (y +265), "Running phase : ").attr({ 'font-size': 17, 'font-weight': 'bold' });
			var rnOn = paper.image("images/green.png", (x + 645), (y + 250), 40, 40);
			var rnOff = paper.image("images/red.png", (x +645), (y + 250), 40, 40);
			
			paper.text((x + 550), (y +305), "Shutdown phase : ").attr({ 'font-size': 17, 'font-weight': 'bold' });
			var shOn = paper.image("images/green.png", (x + 645), (y + 290), 40, 40);
			var shOff = paper.image("images/red.png", (x +645), (y + 290), 40, 40);
			
//			All about top tank i.e. top tank
			var lhtIndicator = paper.image("images/lhindicator.png", (x + 1046), (y + 125), 45, 20);
			paper.text((x+1085), (y+120), "LH1").attr({'font-size':12,'font-weight':'bold'});
			var lhtgStrip = paper.image("images/lblgreen.png", (x + 1100), (y + 125), 35, 22);
			var lhtrStrip = paper.image("images/lblred.png", (x + 1100), (y + 125), 35, 22);
			
			var lltIndicator = paper.image("images/llindicator.png", (x + 1042), (y + 200), 45, 20);
			paper.text((x+1085), (y+195), "LL1").attr({'font-size':12,'font-weight':'bold'});
			var lltrStrip = paper.image("images/lblred.png", (x + 1100), (y + 200), 35, 22);
			var lltgStrip = paper.image("images/lblgreen.png", (x + 1100), (y + 200), 35, 22);
			
//			All about lower tank i.e. bottom tank	
			
			var lhbIndicator = paper.image("images/lhindicator.png", (x + 1046), (y + 475), 45, 20);
			paper.text((x+1085), (y+460), "LH").attr({'font-size':12,'font-weight':'bold'});
			var lhbgStrip = paper.image("images/lblgreen.png", (x + 1100), (y + 475), 35, 22);
			var lhbrStrip = paper.image("images/lblred.png", (x + 1100), (y + 475), 35, 22);
			
			var llbIndicator = paper.image("images/llindicator.png", (x + 1042), (y + 550), 45, 20);
			paper.text((x+1085), (y+545), "LL").attr({'font-size':12,'font-weight':'bold'});
			var llbrStrip = paper.image("images/lblred.png", (x + 1100), (y + 550), 35, 22);
			var llbgStrip = paper.image("images/lblgreen.png", (x + 1100), (y + 550), 35, 22);
			
			//	Motor
			var motor_img = paper.image("images/motor.png", (x + 780), (y + 510), 100, 100);  //motor
			
//			On Off Buttons
			var onBtn = paper.image("images/circle_green.png", (x + 816), (y + 553), 30, 30);
			
			var offBtn = paper.image("images/circle_red.png", (x + 816), (y + 553), 30, 30);
			
			paper.text((x+1105), (y+615), "Drain Valve").attr({'font-size':15,'font-weight':'bold'});
		    var rvalve_drain = paper.image("images/svValveV1R.png", (x + 1030), (y + 589), 40, 40); //feed tank drain valve
			
			paper.text((x+1040), (y+295), "SV").attr({'font-size':15,'font-weight':'bold'});
		    var gvalve_sv1 = paper.image("images/svValveV2G.png", (x + 976), (y + 280), 100, 80);   //tank connector vertical valve
			var rvalve_sv1 = paper.image("images/svValveV1R.png", (x + 976), (y + 280), 100, 80);   //tank connector vertical valve
			
			var valve_cv = paper.image("images/controlValve.png", (x + 530), (y + 486), 120, 120); 

			var orifice = paper.image("images/orifice.png", (x + 320), (y + 477), 180, 150);
			
			var venture = paper.image("images/venturi.png", (x + 140), (y + 437), 100, 170);
		//	
			var pitot = paper.image("images/pitot.png", (x + 140), (y -65), 80, 100);
		//	
			var magnetic = paper.image("images/turbine.png", (x + 740), (y - 58), 150, 120);
		//	
			var ultrasonic = paper.image("images/ultrasonic.png", (x + 500), (y - 58), 200, 180);
		//	
			var turbine = paper.image("images/magnetic.png", (x + 330), (y - 60), 100, 120);
			
			paper.text((x+200), (y+425), "Venturi Meter").attr({'font-size':15,'font-weight':'bold'});
			
			paper.text((x+405), (y+485), "Orifice Meter").attr({'font-size':15,'font-weight':'bold'});
			
			paper.text((x+595), (y+485), "Control Valve").attr({'font-size':15,'font-weight':'bold'});
			
			paper.text((x+830), (y+500), "Motor").attr({'font-size':15,'font-weight':'bold'});
			
			paper.text((x+175), (y+65), "Pitot Tube").attr({'font-size':15,'font-weight':'bold'});
			
			paper.text((x+375), (y+65), "Electromagnetic Flow Meter").attr({'font-size':15,'font-weight':'bold'});
			
			paper.text((x+610), (y+65), "Ultrasonic Flow Meter").attr({'font-size':15,'font-weight':'bold'});
			
			paper.text((x+815), (y+65), "Turbine Flow Meter").attr({'font-size':15,'font-weight':'bold'});
			
			function rectTextBoxes(x,y){
				paper.rect((x+130),(y+85),90,28,7).attr({"fill":"#000","stroke":"#9d9d9e","stroke-width":5});
			 } 
			
			rectTextBoxes(x,y); 	
			var pitotVal = paper.text((x+175), (y+99), "0").attr({"font-size":18,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"});
			
			rectTextBoxes((x+200),y); 	
			var magneticVal = paper.text((x+375), (y+99), "0").attr({"font-size":18,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"});
			
			rectTextBoxes((x+430),y); 	
			var ultrasonicVal = paper.text((x+605), (y+99), "0").attr({"font-size":18,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"});
			
			rectTextBoxes((x+635),y); 	
			var turbineVal = paper.text((x+810), (y+99), "0").attr({"font-size":18,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"}); 
			
			rectTextBoxes((x+25),(y+300)); 	
			var venturiVal = paper.text((x+200), (y+399), "0").attr({"font-size":18,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"}); 
			
			rectTextBoxes((x+230),(y+360)); 	
			var orificeVal = paper.text((x+405), (y+459), "0").attr({"font-size":18,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"}); 
			
			rectTextBoxes((x+420),(y+360)); 	
			var cvVal = paper.text((x+595), (y+459), "0").attr({"font-size":18,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"});  
			
			rectTextBoxes((x+655),(y+360)); 	
			var motorVal = paper.text((x+830), (y+459), "0").attr({"font-size":18,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"});
			
			rectTextBoxes((x+675),(y+183)); 	
			var loadcellVal = paper.text((x+850), (y+282), tareInit).attr({"font-size":18,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"});     
			
			lhtgStrip.toFront();
			lltrStrip.toFront();
			lhbgStrip.toFront();
			llbrStrip.toFront();

			initFill(x, y);
			
			
			function initFill(x, y){
				a = [];
				a[0] = paper.path("M" + (x + 1005) + " " + (y + 238) + " l 0 0").attr({ 'stroke': color, 'stroke-width': '15' })
				a[0].animate({ path: "M" + (x + 1005) + " " + (y + 238) + " l 0 43" }, (100), function() {})
						
				a[1] = paper.path("M" + (x + 1005) + " " + (y + 239) + " l 0 0").attr({ 'stroke': color, 'stroke-width': '128' })
				a[1].animate({ path: "M" + (x + 1005) + " " + (y + 239) + " l 0 -20" }, (200), function() {})
				
				a[3] = paper.path("M" + (x + 1005) + " " + (y + 589) + " l 0 0").attr({ 'stroke': color, 'stroke-width': '128' })
				a[3].animate({ path: "M" + (x + 1005) + " " + (y + 589) + " l 0 -20" }, (200), function() {})
			}
			
			var cntbLbl = paper.text((x + 980), (y + 535), 20).attr({ 'font-size': 15, 'font-weight': 'bold' });

			var cnttLbl = paper.text((x + 980), (y + 185), 20).attr({ 'font-size': 15, 'font-weight': 'bold' });
			s = [];
			function emptyTopTankToBottom(x, y) { 
				resetMeterToZero();
				r[0].hide();
				r[1].hide();
				r[2].hide();
				r[3].hide();
				gvalve_sv1.toFront();

				s[0] = paper.path("M" + (x ) + " " + (y+137) + " l 0 0").attr({ 'stroke': color, 'stroke-width': '15'})
					s[0].animate({ path: "M" + (x) + " " + (y+137) + " l 0 213"}, (time), function() {
						decrementLoadCell();
						tank_emptyt((x),(y-110));
						tank_fillb((x),(y+350));	
						
					});
			}
			
			function decrementLoadCell(){
					ptDec = 1;
					var ptd1_interval = setInterval(function() {
					if ( ptt > 0 && !(tankWt <= 0)) {
						if(ptt % 5 == 0){
							tankWt = tankWt - wt; 
							loadcellVal.attr('text', tankWt);
							$("#lcWtVal1").text(tankWt);
							dataArrDownwt.push(tankWt);
							data.downWt = dataArrDownwt;
						}
					}else{
						clearInterval(ptd1_interval);
						shOff.toFront();
						$("#flowSensorNextLvlBtn").prop("disabled", false);
						tareOff.toFront();
						data.upwt = dataArrUpwt; 
						data.sensor = dataArrUp;
						dataArr.push(data);
						console.log(dataArr);
						
						$("#datasheetBtn,#graph").prop("disabled", false);
					}
				}, time/4);
			}
			
			function tank_fillb(x, y) { 
				if(initFlg == false){
					inletR.hide();
					inletG.show().toFront();
					a[2] =  paper.path("M" + (x+20) + " " + (y-110) + " l 0 0").attr({ 'stroke': color, 'stroke-width': '8' })
					a[2].animate({ path: "M" + (x+20) + " " + (y-110) + " l 0 110" }, (200), function() {})
				}
				
				initFlg = true;
				var b = paper.path('M' + (x) + ' ' + (y) + 'l 0 0').attr({ 'stroke': color, 'stroke-width': '128' });
				level = b.animate({
					path: "M" + (x) + " " + (y) + "  l 0  " + (htb) + "", 'stroke-width': '128', 'stroke': color,
					opacity: 1
				}, time * 20);

				intFact = 1;
				var pinterval = setInterval(function() {
					llbIndicator.toFront();
					lhbIndicator.toFront();
					if (ptb < 100) {
						if (ptb == 25) {
							llbgStrip.toFront();
						}
						if (ptb == 80) {
							lhbrStrip.toFront();
						}
						ptb = ptb + intFact;
						cntbLbl.attr('text', Math.round(ptb));
						cntbLbl.toFront();
					} else {
						clearInterval(pinterval);
						inletR.show().toFront();
						stOff.toFront();
						$("#startBtn").prop("disabled", false);
//						$("#datasheetBtn").prop("disabled", false);
					}
				}, time/4);
			};
			
			
			function tank_emptyb(x, y) {
				$("#startBtn").prop("disabled", true);
				$("#datasheetBtn,#graph").prop("disabled", true);
				var b = paper.path('M' + (x) + ' ' + (y) + 'l 0 0').attr({ 'stroke': emptyColor, 'stroke-width': '128' });
				level = b.animate({
					path: "M" + (x) + " " + (y) + "  l 0  " + (htb1) + "", 'stroke-width': '128', 'stroke': emptyColor,
					opacity: 1
				}, time*23);
				
					ptDec = 1;
					var ptd_interval3 = setInterval(function() {
						llbIndicator.toFront();
						lhbIndicator.toFront();
					if ( ptb > 20) {
						if(ptb== 25){
							llbrStrip.toFront();
							offBtn.toFront();
						}
						if(ptb == 80){
							lhbgStrip.toFront();
						}
						ptb = ptb - ptDec;
						cntbLbl.attr('text', Math.round(ptb));
						cntbLbl.toFront();
					}else{
//						toastr.info("Tank empty");
						clearInterval(ptd_interval3);
					}
				}, time/3.5);
			};
			
			function tank_fillt(x, y) {
//				dataArrUp = [];
				var b = paper.path('M' + (x) + ' ' + (y) + 'l 0 0').attr({ 'stroke': color, 'stroke-width': '128' });
				level = b.animate({
					path: "M" + (x) + " " + (y) + "  l 0  " + (htt) + "", 'stroke-width': '128', 'stroke': color,
					opacity: 1
				}, time * 20);

				intFact = 1;
				var pinterval = setInterval(function() {
					lltIndicator.toFront();
					lhtIndicator.toFront();
					if (ptt < 100) {
						if (ptt == 25) {
							lltgStrip.toFront();
						}
						if (ptt == 80) {
							lhtrStrip.toFront();
						}
						ptt = ptt + intFact;
						cnttLbl.attr('text', Math.round(ptt));
						cnttLbl.toFront();
					} else {
						clearInterval(pinterval);toastr.info("Tank filled. Wait for a while to drain the tank");
						setTimeout(function() { emptyTopTankToBottom(x, y);}, 5000);
					}
				}, time/4);
			};
			
			function tank_emptyt(x, y) {
				dataArrDownwt = [];
				var b = paper.path('M' + (x) + ' ' + (y) + 'l 0 0').attr({ 'stroke': emptyColor, 'stroke-width': '128' });
				level = b.animate({
					path: "M" + (x) + " " + (y) + "  l 0  " + (htt1) + "", 'stroke-width': '128', 'stroke': emptyColor,
					opacity: 1
				}, time*20);
				
					ptDec = 1;
					var ptd_interval2 = setInterval(function() {
						lltIndicator.toFront();
						lhtIndicator.toFront();
					if ( ptt > 20) {
						if(ptt== 25){
							lltrStrip.toFront();
						}
						if(ptt == 80){
							lhtgStrip.toFront();
						}
						
//						if(ptt % 5 == 0){
//							tankWt = tankWt - wt; 
//							loadcellVal.attr('text', tankWt);
//						}
						
						ptt = ptt - ptDec; 
						cnttLbl.attr('text', Math.round(ptt));
						cnttLbl.toFront();
					}else{
						clearInterval(ptd_interval2);
						if(s.length != 0){
							rvalve_sv1.toFront();
							s[0].hide();
						}
					}
				}, time/4);
			};
			
			function resetMeterToZero(){
				rnOff.toFront();
				shOn.toFront();
				pitotVal.attr('text', "0");
				magneticVal.attr('text', "0");
				ultrasonicVal.attr('text', "0");
				turbineVal.attr('text', "0");
				venturiVal.attr('text', "0");
				orificeVal.attr('text', "0");
				cvVal.attr('text', "0 %");
				motorVal.attr('text', "0 %");
				
				$("#turbineVal1").text("0");
				$("#venturiVal1").text("0");
				$("#eleMagneticVal1").text("0");
				$("#pitotVal1").text("0");
				$("#ultrasonicVal1").text("0");
				$("#orificeVal1").text("0");
				$("#cvVal1").text("0");
				$("#motorVal1").text("0");
				$("#lcWtVal1").text("0");
				
			}
			
//			TODO: fill tank button
//		    click event listener for fill tank button
		    document.getElementById("fillTankBtn").addEventListener("click", function () {
		    	$("#runModeM1,#unModeCV").prop("disabled", true);
					stOn.toFront();
					tank_fillb((x+1005),(y+570));
					$("#fillTankBtn").prop("disabled", true);
					
					setTimeout(function() {
						eleOff.hide();
						airOff.hide();
						eleOn.show();
						airOn.show();
					}, 3000);
			});
			
//			TODO: start btn
//			Click event listener for start button 
		    document.getElementById("startBtn").addEventListener("click", function () {
				$("#flowSensorNextLvlBtn").prop("disabled", true);
		    	data = {};
				stOff.toFront();
				rnOn.toFront();
				loadcellVal.attr('text', "0");
				toastr.success("Tare weight reset to 0");
				 setTimeout(() => {
					r = [];
					r[0] = paper.path("M" + (x + 940) + " " + (y + 578) + " l 0 0").attr({ 'stroke': color, 'stroke-width': '15'})
						motor_img.toFront();
						onBtn.toFront();
						valve_cv.toFront();
						orifice.toFront();
						venture.toFront();
					r[0].animate({ path: "M" + (x + 940) + " " + (y + 578) + " l -912 0"}, (time), function() {
						tank_emptyb((x+1005),(y+460));
						r[1] = paper.path("M" + (x + 35) + " " + (y + 580) + " l 0 0").attr({ 'stroke': color, 'stroke-width': '15'})
						r[1].animate({ path: "M" + (x + 35) + " " + (y + 582) + " l 0 -560"}, (time), function() {
							r[2] = paper.path("M" + (x + 30) + " " + (y + 28) + " l 0 0").attr({ 'stroke': color, 'stroke-width': '15'})
							pitot.toFront();
							magnetic.toFront();
							ultrasonic.toFront();
							turbine.toFront();
							r[2].animate({ path: "M" + (x + 30) + " " + (y + 28) + " l 983 0"}, (time), function() {
								r[3] = paper.path("M" + (x + 1005) + " " + (y + 28) + " l 0 0").attr({ 'stroke': color, 'stroke-width': '15'})
								r[3].animate({ path: "M" + (x + 1005) + " " + (y + 28) + " l 0 200"}, (time), function() {
									tank_fillt((x+1005),(y+220));
									
								})
							})
						})
					})
					
					setTimeout(() => {
						valueIterator();
					}, time);
				}, time);
				
				tareOn.toFront();
//			 	toastr.warning('Kuch to gadbad hai');
//			 	toastr.success("Jalma re");
//			 	toastr.error("Zala gondhal");
//			 	toastr.info("Tuza mahiti sathi");
				
				
				
			});
		
			
			function evaluate(v, ve, max, min){
				v = v + 275; 
				ve = diff = Math.random() * (max - min) + min;
				perv = (v/100)*ve;
				randomSign = Math.random() < 0.5 ? -1 : 1;
				perv = randomSign * perv;
				return v + perv;
			}
			
			function valueIterator(){
				
				var pv = 0, mv = 0, uv = 0, vv = 0, ov = 0, tv = 0;
				var pve = 0, mve = 0, uve = 0, vve = 0, ove = 0;
				
				let vmin = 0.25;
				let vmax = 2;
					
				let omin = 0;
				let omax = 4;
					
				let pmin = 0;
				let pmax = 1;
					
				let umin = 0;
				let umax = 2;
					
				let mmin = 0;
				let mmax = 0.5;
				let cnt = 0;
				
				flaag = false;
				dataArrUp = [];
				dataArrUpwt = [];
				
				for(i = 0 ; i < 20 ; i++){
					
					 setTimeout(() => {
						 round = {};
						cnt = cnt + 5; 
						tv = tv + 275;
						
						vv = evaluate(vv, vve, vmax, vmin);				
						pv = evaluate(pv, pve, pmax, pmin);				
						mv = evaluate(mv, mve, mmax, mmin);				 
						uv = evaluate(uv, uve, umax, umin);				 
						ov = evaluate(ov, ove, omax, omin);
						
						$("#turbineVal1").text(tv.toFixed(2));
						$("#venturiVal1").text(vv.toFixed(2));
						$("#eleMagneticVal1").text(mv.toFixed(2));
						$("#pitotVal1").text(pv.toFixed(2));
						$("#ultrasonicVal1").text(uv.toFixed(2));
						$("#orificeVal1").text(ov.toFixed(2));
						
						round.tv = tv.toFixed(2);
						round.vv = vv.toFixed(2);
						round.mv = mv.toFixed(2);
						round.pv = pv.toFixed(2);
						round.uv = uv.toFixed(2);
						round.ov = ov.toFixed(2);
						
						if(runMode == "m1"){
							cvVal.attr('text', "100 %");
							$("#cvVal1").text("100");
							motorVal.attr('text', cnt+" %");
							$("#motorVal1").text(cnt);
							round.contv = "100";
							round.motor = cnt;
						}else if(runMode == "cv"){
							motorVal.attr('text', "100 %");
							$("#motorVal1").text("100");
							cvVal.attr('text', cnt+" %");
							$("#cvVal1").text(cnt);
							round.contv = cnt;
							round.motor = "100";
						}
						
						dataArrUp.push(round);
						
						setTimeout(() => {
						orificeVal.attr('text', ov.toFixed(2));
							setTimeout(() => {
								venturiVal.attr('text', vv.toFixed(2));
								setTimeout(() => {
									pitotVal.attr('text', pv.toFixed(2));
									setTimeout(() => {
										magneticVal.attr('text', mv.toFixed(2));
										setTimeout(() => {
											ultrasonicVal.attr('text', uv.toFixed(2));
											setTimeout(() => {
												turbineVal.attr('text', tv.toFixed(2));
												setTimeout(() => {
													tankWt = tankWt + wt;											
													loadcellVal.attr('text', tankWt);
													$("#lcWtVal1").text(tankWt);
													dataArrUpwt.push(tankWt);
												}, time);
											}, time/4);
										}, time/4);
									}, time/4);
								}, time);
							}, time/4);
							
						}, time/4);
					}, i*(time*1.2)); 
				}
			}
			
	
	
	
	
	}