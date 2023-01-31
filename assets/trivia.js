// https://api-ninjas.com/api/animals
// jen api key btEPU29q9pKigtx0a4g47g==bJB66T4QMs6eLCx1

var animalNameArray = [];
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
        //var animalNameArray = result.animalName.map(createAnimalNameArray);
        //console.log(animalNameArray);
        //console.log(animalName + " lives in " + animalLocation);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }

})
};
returnTrivia();

// When all of the cards are matched,
// show initials form and button to display modal alert with trivia fact
function gameOver () {
    document.getElementById("initials-form").style.display=block;
    document.getElementById("trivia-button").style.display=block;
}

// Displays trivia modal
function showTrivia() {
    document.getElementById("trivia-modal").style.display=block;
}