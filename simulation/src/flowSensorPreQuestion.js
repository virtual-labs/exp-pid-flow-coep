function flowSensorPreQuestion()
{
	$("#Selection").html("");
	$("#Header").html("	<center><span>SEQUENCE OF ACTIVITIES</span></center>");
	htm=''
	+'<table>'
	+'<thead>'
	+'<tr>'
	+' <th>PRIOR KNOWLEGDE ASSESSMENT </th>'
	+' <th>ACTIVITY SEQUENCE NUMBER</th>'
	+'</tr>'
	+'</thead>'
	+'<tbody id="output"></tbody>'
	+'</table>'
	+'<button id="verifyButton" class="btn btn-danger btn1" data-toggle="modal" data-target="#preReq">SUBMIT</button>'
	+'<div ></div>'
+'	<!-- 			    The Modal  ProStr -->'
+'	  <div class="modal fade " id="preReq">'
+'	    <div class="modal-dialog modal-md" >'
+'		      <div class="modal-content">'
+'<!-- 		        Modal Header -->'
+'		        <div class="modal-header">'
+'	          <h4 class="modal-title"><center>Message Box</center></h4>'
+'		          <button type="button" class="close" data-dismiss="modal">&times;</button>'
+'		        </div>'
+'<!-- 		        Modal body -->'
+'		        <div class="modal-body" id="modalMessage" style="color:red">'

+'		        </div>'
+'<!-- 			        Modal footer -->'
+'		        <div class="modal-footer">'
+'	             <button type="button" class="btn btn-danger" data-dismiss="modal" >Ok</button>'
+'		        </div>'
+'		      </div>'
+'		    </div>'
+'		  </div>'
+'<!-- 			  End Modal ProStr -->'
	$("#diagram").html(htm);
	// Shuffle function
	// Initialize variables
	// Initialize variables
	var attempts = 0;
	const maxAttempts = 4;
	var totalAccuracy = 0;

	$(document).ready(function () {
	    // Shuffle the groups
		
		function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
		
	    shuffleArray(jsonData.groups);

	    var outputHtml = '';
	    jsonData.groups.forEach(group => {
	        group.statements.forEach(statement => {
	            outputHtml += `
	                <tr>
	                    <td>${statement.statement}</td>
	                    <td>
	                        <input type="number" class="input-box" data-min="${group.min}" data-max="${group.max}" placeholder="Enter step number">
	                    </td>
	                </tr>
	            `;
	        });
	    });
	    $('#output').html(outputHtml);

	    // Modal box logic
	    var modal = $('#resultModal');
	    var span = $('.close');

	    function showModal(message) {
	        $('#modalMessage').html(message);
	        modal.css('display', 'block');
	    }

	    span.click(function () {
	        modal.css('display', 'none');
	    });

	    $(window).click(function (event) {
	        if (event.target === modal[0]) {
	            modal.css('display', 'none');
	        }
	    });

	    // Blur event validation
	    $('.input-box').on('blur', function () {
	        let enteredValue = $(this).val();
	        let minLimit = 1;
	        let maxLimit = 11;

	        // Check if the input is a number
	        if (!/^\d+$/.test(enteredValue)) {
	            toastr.danger("Please enter a valid numerical value.");
	            $(this).val(''); // Clear invalid input
	            return;
	        }

	        // Validate range
	        if (enteredValue < minLimit || enteredValue > maxLimit) {
	            toastr.warning(`Please enter a value between ${minLimit} and ${maxLimit}.`);
	            $(this).val(''); // Clear invalid input
	            return;
	        }

	        // Check for duplicate entries directly from inputs
	        let allValues = $('.input-box').map(function () {
	            return $(this).val();
	        }).get();

	        if (allValues.filter(value => value === enteredValue).length > 1) {
	            toastr.warning("Duplicate entry is not allowed.");
	            $(this).val(''); // Clear invalid input
	        }
	    });

	    // Verify button logic
	    $('#verifyButton').click(function () {
	        if (attempts >= maxAttempts) {
	            showModal("No attempts remaining.");
	            return;
	        }

	        attempts++;
	        var totalCorrect = 0;
	        var totalEntries = jsonData.groups.reduce((sum, group) => sum + group.statements.length, 0);

	        $('.input-box').each(function () {
	            let enteredValue = $(this).val();
	            let minLimit = $(this).data('min');
	            let maxLimit = $(this).data('max');

	            if (enteredValue >= minLimit && enteredValue <= maxLimit) {
	                totalCorrect++;
	            }
	        });

	        let currentAccuracy = ((totalCorrect / totalEntries) * 100).toFixed(2);
	        totalAccuracy += parseFloat(currentAccuracy);
	        let averageAccuracy = (totalAccuracy / attempts).toFixed(2);
	        let remainingAttempts = maxAttempts - attempts;

	        if (attempts === maxAttempts || averageAccuracy === '100.00') {
	            flowSensorMimic();
	            $('.input-box').prop('disabled', true);
	        }

	        showModal(`
	            <strong>Correctness:</strong> ${averageAccuracy}%<br>
	            <strong>Remaining Attempts:</strong> ${remainingAttempts}
	        `);
	    });
	});


}
