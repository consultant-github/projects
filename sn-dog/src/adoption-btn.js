jQuery('#addDog').click(function() {
    var ga = new GlideAjax('fetchUtils');
    ga.addParam('sysparm_name', 'createDog');
    ga.addParam('sysparm_dog_name', jQuery('#dogName').val());
    ga.addParam('sysparm_dog_age', jQuery('#dogAge').val());
    ga.addParam('sysparm_dog_neutered', jQuery('#dogNeutered').is(':checked'));
    ga.addParam('sysparm_dog_shots', jQuery('#dogShots').is(':checked'));
    ga.getXML(fetchBallBack);
});

function fetchBallback(response) {
    var answer = response.responseXML.documentElement.getAttribute('answer').split('|');
    jQuery('#msg').append('<p>' + answer[0] + ' has successfully been created. Dog ID: ' + answer[1] + '</p><br/><a href="' + answer[2] + '">View new dog</a>');
}
