// https://api-ninjas.com/api/animals
// jen api key btEPU29q9pKigtx0a4g47g==bJB66T4QMs6eLCx1

var animalArray = ['sea lion', 'polar bear', 'sea otter'];
var APIkey = 'btEPU29q9pKigtx0a4g47g==bJB66T4QMs6eLCx1';

function fetchTrivia(animal) {
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/animals?name=' + animal,
    headers: { 'X-Api-Key': APIkey},
    contentType: 'application/json',
    
    success: function(result) {
        console.log(result[0]);
        console.log(result[0].name);
        console.log(result[0].characteristics.lifespan);
        console.log(result[0].characteristics.habitat);
        console.log(result[0].characteristics.slogan);
        returnTrivia(result);
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
})
};

for(i = 0; i < animalArray.length; i++){
    fetchTrivia(animalArray[i]);
    };
    
function returnTrivia(result) {
    var factsArray = [
        'A ' + result[0].name + 'lives in ' + result[0].characteristics.habitat,
        'A ' + result[0].name + 'lives for ' + result[0].characteristics.lifespan,
        'A ' + result[0].name + result[0].characteristics.slogan
    ];
    console.log(factsArray);
    var facts = document.getElementById('facts');
    for(i = 0; i < factsArray.length; i++){
    facts.textContent= factsArray[i];
    }
};

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}  

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