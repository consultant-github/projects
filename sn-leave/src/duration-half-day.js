function onChange(control, oldValue, newValue, isLoading, isTemplate) {
   if (isLoading || newValue === '') {
      return;
   }

   //Type appropriate comment here, and begin script below
   var halfday = g_form.getValue('half_day');
	if (halfday == 'true')
		{
			g_form.setValue('duration','0.5');
		}
}
