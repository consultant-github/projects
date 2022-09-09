getLeaveBucket : function()	{
	var gr = new GlideRecord('x_513810_lms_leave_bucket');
	gr.addQuery('employee',this.getParameter('sysparm_user')); //get the user from the client
	gr.addQuery('leave_type',this.getParameter('sysparm_leavetype'));
	gr.query(); //query end
		if(gr.next()) { //look for next record, if another record for this employee, then create JSON object and send the details to the client
			
				//create an empty object for this variable
				var leaveDetails = {}; 
				leaveDetails.accrued = '' + gr.accrued;  //get data, package it into a JSON object (string format), and send back to client
				leaveDetails.balance = '' + gr.balance;
				leaveDetails.taken = '' + gr.taken;  //pushing the values into leave details
				//stringify
				return JSON.stringify(leaveDetails);  //returns stringified info (JSON format) back to client
		}	
	},
	
    type: 'lmsAjax'
    
});
