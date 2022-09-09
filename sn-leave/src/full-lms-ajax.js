(function executeRule(current, previous /*null when async*/) {

	// Add your code here
	var gr = new GlideRecord('x_513810_lms_leave_calculator');
	gr.addQuery('country.name',current.location.country);
	gr.query();
	if(gr.next())
		{
			if (gr.leave_assignment == 'y')
				{
					var gdt = new GlideDateTime();
					var currentMonth = gdt.getMonthLocalTime();
					var monthsLeft = 12 - currentMonth;
					var perMonth = gr.leaves/12;
					var totalLeaves = perMonth * monthsLeft;
					
					var leaveBucket = new GlideRecord('x_513810_lms_leave_bucket');
					leaveBucket.initialize();
					leaveBucket.leave_type = gr.leave_type;
					leaveBucket.accrued = totalLeaves;
					leaveBucket.balance = totalLeaves;
					leaveBucket.taken = 0;
					leaveBucket.employee = current.sys_id;
					leaveBucket.insert();
				}
			else if (gr.leave_assignment == 'm')
				{
					var perMonthM = gr.leaves/12;
					var leaveBucketM = new GlideRecord('x_513810_lms_leave_bucket');
					leaveBucketM.initialize();
					leaveBucketM.leave_type = gr.leave_type;
					leaveBucketM.accrued = perMonthM;
					leaveBucketM.balance = perMonthM;
					leaveBucketM.taken = 0;
					leaveBucketM.employee = current.sys_id;
					leaveBucketM.insert();
				}
		}
})(current, previous);
