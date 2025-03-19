var InstrMasterJson = {};


function flowSensorInstrument()
{
	var StdCompInstruCount=11;
	var StdVPLCCount=1;
	var StdAFRCount=1;
	var StdVFDCount=1;
	var StdFlowMeterCount=6;
	var StdWTCount=1;
	var StdIPCount=1;

	var perVPLCCount;
	var perAFRCount;
	var perVFDCount;
	var perFlowMeterCount;
	var perWTCount;
	var perIPCount;

	var vplc;
	var afr;
	var vfd;
	var fm;
	var ip;
	var wt;
	
		var instrActualCount=0;
	timerMasterJson.piping=$("#counter").text();
//	console.log(timerMasterJson);
	seconds = 0;
	  updateCounter();
	
	$("#Header").html("	<center><span >  FLOW SENSOR - INSTRUMENT DIAGRAM</span></center>");
	$("#Selection").css({"overflow": "auto","height":" 837px"});
	htm=''
		+'<div class="row titlePart" style="    border-style: unset;">'
		+'<center><span >CONFIGURATION</span></center>'
		+'</div>'
	
     	+'<div class="row conf" >'
		+'<div class="col-sm-12">'
		+'<label><b>Select no of flow meter</b></label>'
		+' <input class="form-select" id="fm"  type="number" min="0" max="6" value="0" tabindex="1"></input>'
		+'</div>'
		
		
		+'<div class="col-sm-12">'
		+'<label><b>Select no of programmable logic controller (PLC)</b></label>'
		+' <input class="form-select" id="vplc" type="number" min="0" max="5" value="0" tabindex="2"></input>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<label><b>Select no of  air filter regulator (AFR)</b></label>'
		+' <input class="form-select" id="afr" type="number" min="0" max="5" value="0" tabindex="3"></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Select no of Weight transmitter (WT)</b></label>'
		+' <input class="form-select" id="wt"  type="number" min="0" max="5" value="0" tabindex="4" ></input>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<label><b>Select no of variable frequency drive (VFD)</b></label>'
		+' <input class="form-select" id="vfd" type="number" min="0" max="5" value="0" tabindex="5"></input>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<label><b>Select no of  I/P</b></label>'
		+' <input class="form-select" id="ip" type="number" min="0" max="5" value="0" tabindex="6"></input>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<button type="button" class="btn btn-danger"  id="verifyInstr" style="margin-top:10px;width:100%" data-toggle="modal" data-target="#myModal1" tabindex="7">Verify Instruments </button>'
		
//		+'	  <!-- The Modal -->'
		+'  <div class="modal fade " id="myModal1">'
		+'    <div class="modal-dialog " id="modelDialog1">'
		+'	      <div class="modal-content">'
//		+'	        <!-- Modal Header -->'
		+'	        <div class="modal-header">'
		+'	          <h4 class="modal-title"><center id="modelTitle1"></center></h4>'
		+'	          <button type="button" class="close" data-dismiss="modal">&times;</button>'
		+'	        </div>'
//		+'	        <!-- Modal body -->'
		+'	        <div class="modal-body" id="modelBody1">'
		
		+'	        </div>'
//		+'	        <!-- Modal footer -->'
		+'	        <div class="modal-footer">'
		+'	          <button type="button" class="btn btn-danger" data-dismiss="modal" >Ok</button>'
		+'	        </div>'
		+'	      </div>'
		+'	    </div>'
		+'	  </div>'
//		+'	  <!-- End Modal -->'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<button type="button" class="btn btn-danger"  id="nextLevel2" style="margin-top:10px;margin-bottom:10px;width:100%" tabindex="8" hidden>Next level</button>'
		+'</div>'
		
		+'</div>'
		
	$("#Selection").html(htm);
	
       var temp=0;
	 var totalComp1=0; 
	   var flag=0;
	$("#verifyInstr").click(function(){
		instrActualCount++;
		 fm=parseInt($("#fm").val());
		 vplc=parseInt($("#vplc").val());
		 afr=parseInt($("#afr").val());
		 vfd=parseInt($("#vfd").val());
		 wt=parseInt($("#wt").val());
		 ip=parseInt($("#ip").val());
		 CountComp1();
		 
		  console.log(" fm "+fm);
		  console.log(" vplc "+vplc);
		  console.log(" afr "+afr);
		  console.log(" vfd "+vfd);
		  console.log(" wt "+wt);
		  console.log(" ip "+ip);
		 
		  if(totalComp1==0){
				$("#modelDialog1").addClass("modal-md");
				$("#modelTitle1").html("Error box");
				  $("#modelBody1").html("<b>Select Components</b> ");
				  $("#modelBody1").css("color","red");
		  }
		  else{
			  if(temp<3){
				  CountComp1();
			  }else {
				  if(flag==0){
					  $("#modelDialog1").addClass("modal-xl");
					  $("#modelTitle1").html("Required configuration ");
						htm=''
					  
						+'<div class="col-sm-12" >'
						+'<center>REQUIRED COMPONENTS</center>'
						+'</div>'
					  +'<div class="col-sm-12" >'
						+'<table class="table table-striped table-bordered">'
						+' <tbody>'
						+'    <tr class="table-dark text-dark">'
						+'     <td><center>FLOW METER</center></td>'
						+'     <td><center>PLC</center></td>'
						+'     <td><center>AFR</center></td>'
						+'     <td><center>VFD</center></td>'
						+'     <td><center>WT</center></td>'
						+'     <td><center>I/P</center></td>'
						+'   </tr>'
						+'    <tr>'
						+'     <td><center>6</center></td>'
						+'     <td><center>1</center></td>'
						+'     <td><center>1</center></td>'
						+'     <td><center>1</center></td>'
						+'     <td><center>1</center></td>'
						+'     <td><center>1</center></td>'
						+'   </tr>'
					    +' </tbody>'
						+'</table>'
						+'</div>'
						+"<img src='images/Flow_Meter.png' class='img-fluid' style='border-style: double;border-color: black;'>"
						 $("#modelBody1").html(htm);
						  $("#modelBody1").css("color","red"); 
				  }
				  else
					  {
					  CountComp1();
					  }
				
			  }
			  temp++;
		  }
	
	});
		  
	function CountComp1(){
	
		if((fm==StdFlowMeterCount) && (vplc==StdVPLCCount) && (afr==StdAFRCount) && (vfd==StdVFDCount) && (ip==StdIPCount) && (wt==StdWTCount) ){
			$("#modelDialog1").removeClass("modal-xl");
			 $("#modelDialog1").addClass("modal-md");
			 $("#modelTitle1").html("Message box");
			 $("#modelBody1").html("<b>Click on 'Next level' button.</b>");
			$("#modelBody1").css("color","green");
			$("#fm,#vplc,#afr,#vfd,#ip,#wt,#verifyInstr").prop("disabled",true);
			addToMasterJson();
		
			flag=1;
			htm=''
				
				+'<div class="col-sm-12" >'
				+"<img src='images/Flow_Meter.png' class='img-fluid' id='partB1' style=' width: 100px;height:100px;position: relative; margin: 20px;' >"
				+'</div>'
			  $("#diagram").html(htm);
			  $("#partB1").animate(
			          {
			            width: "80%",
			            height: "100%",
			            left: "+=50px",
			          },
			          1000,
			          
			        );
				$("#nextLevel2").prop("hidden",false);
		}
		else{
			
			
			
			perVPLCCount=parseFloat((vplc*100)/StdVPLCCount);
			perAFRCount=parseFloat((afr*100)/StdAFRCount);
			perVFDCount=parseFloat((vfd*100)/StdVFDCount);
			perFlowMeterCount=parseFloat((fm*100)/StdFlowMeterCount);
			perWTCount=parseFloat((wt*100)/StdWTCount);
			perIPCount=parseFloat((ip*100)/StdIPCount);
			
			 console.log(" perVPLCCount "+perVPLCCount);
			 console.log(" perAFRCount "+perAFRCount);
			 console.log(" perVFDCount "+perVFDCount);
			 console.log(" perFlowMeterCount "+perFlowMeterCount);
			 console.log(" perWTCount "+perWTCount);
			 console.log(" perIPCount "+perIPCount);
			 
				totalComp1=perVPLCCount+perAFRCount+perVFDCount+perFlowMeterCount+perIPCount+perWTCount;
			  avg=parseInt(totalComp1/6);
			  console.log(" avg "+avg);
			
				 $("#modelDialog1").removeClass("modal-xl");
				$("#modelDialog1").addClass("modal-md");
				
				if((StdFlowMeterCount<fm)||(StdVPLCCount<vplc)||(StdAFRCount<afr)||(StdVFDCount<vfd)||(StdWTCount<wt)||(StdIPCount<ip)){
					
					$("#modelBody1").css("color","red"); 
					$("#modelTitle1").html("Error box");
					$("#modelBody1").html("<b>More components than expected.</b>");
				}else
					{
						if(avg<100){
							$("#modelTitle1").html("Message box");
							$("#modelBody1").css("color","red");
							 $("#modelBody1").html("<b>"+avg+" % Correctness</b>");
								
						}else{
							$("#modelBody1").css("color","red");
							$("#modelTitle1").html("Error box");
							 $("#modelBody1").html("<b>More components than expected. </b>");
						}
					}
				
		}
		
	}
	function addToMasterJson()
	{
		tempMasterJsonInstr = {
				"flow meter":"6",
				"VPLC":"1",
				"AFR":"1",
				"VFD":"1",
				"IP":"1",
				"WT":"1",
				
				};
				
		InstrMasterJson.Instrument=tempMasterJsonInstr;
		console.log(InstrMasterJson);
		resultJson.instrument=instrActualCount;
		console.log(resultJson);
	}
	$("#nextLevel2").click(function(){
		if(flag==1){
			flowSensorPreQuestion();
		}
	
	});
	
	
	
}

