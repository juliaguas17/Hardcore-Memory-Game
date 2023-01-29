// https://api-ninjas.com/api/animals
// jen api key btEPU29q9pKigtx0a4g47g==bJB66T4QMs6eLCx1

var animalArray = ['cheetah', 'frog', 'owl'];
var APIkey = 'btEPU29q9pKigtx0a4g47g==bJB66T4QMs6eLCx1';
var animalName = 'cheetah';

function returnTrivia() {
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/animals?name=' + animalName,
    headers: { 'X-Api-Key': APIkey},
    contentType: 'application/json',
    
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }

})
};
returnTrivia();