  function onChange(control, oldValue, newValue, isLoading, isTemplate) {
   if (isLoading || newValue === '') {
      return;
   }
	  
	//call the script include, call the function, send the parameters created in the script include
	//create new glide ajax variable, include script include name
	var ga = new GlideAjax('lmsAjax');
	ga.addParam('sysparm_name','getLeaveBucket');
	ga.addParam('sysparm_user',g_user.userID); //will store sysID
	ga.addParam('sysparm_leavetype', newValue); //type will change the value, so have to always get the new value per type
	ga.getXML(getBucket); //callback function
	
	function getBucket(response)
	{
		var answer = response.responseXML.documentElement.getAttribute("answer");
		var result = JSON.parse(answer);  //parse the JSON to get each value in the JSON, answer stores the data coming from the script include
		g_form.setValue('accrued',result.accrued); //get the values
		g_form.setValue('balance',result.balance);
		g_form.setValue('taken', result.taken);  //this will set the values on the client
	}
}
