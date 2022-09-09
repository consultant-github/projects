var fetchUtils = Class.create();
fetchUtils.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {

    createDog: function() {
        var dogName = this.getParameter('sysparm_dog_name');
        var dogAge = this.getParameter('sysparm_dog_age');
        var dogShots = this.getParameter('sysparm_dog_shots');
        var dogNeutered = this.getParameter('sysparm_dog_neutered');

        //insert record
        var newDog = new GlideRecord('x_513810_fetch_dogs');
        newDog.newRecord();
        newDog.name = dogName;
        newDog.age = dogAge;
        if (dogShots) {
            newDog.shots = true;
        }
        if (dogNeutered) {
            newDog.neutered = true;
        }
	
    var dogNumber = newDog.number.getDisplayValue();
    var sysID = newDog.insert();
    var dogLink = newDog.getLink();

    // return values
    return dogName + '|' + dogNumber + '|' + dogLink;
},

type: 'fetchUtils'
});
