
var apiKey = 'ab44015fa7a49dd092d72824c1d221fd';
const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
var cardsChosen = [];
var cardsChosenSrc = [];
var cardsWon = [];
var cardImgOne = document.getElementById('cardImg1');
var cardImgTwo = document.getElementById('cardImg2');
var cardImgThree = document.getElementById('cardImg3');
var cardImgFour = document.getElementById('cardImg4');
var cardImgFive = document.getElementById('cardImg5');
var cardImgSix = document.getElementById('cardImg6');
var cardImgSeven = document.getElementById('cardImg7');
var cardImgEight = document.getElementById('cardImg8');
var cardImgNine = document.getElementById('cardImg9');
var cardImgTen = document.getElementById('cardImg10');
var cardImgEleven = document.getElementById('cardImg11');
var cardImgTwelve = document.getElementById('cardImg12');
var cardImgThirteen = document.getElementById('cardImg13');
var cardImgFourteen = document.getElementById('cardImg14');
var cardImgFifteen = document.getElementById('cardImg15');
var cardImgSixteen = document.getElementById('cardImg16');
var photoURLs;

function shuffleArray(array) {
    array.sort(() => 0.5 - Math.random());
}

//listen for click and invoke a flipcard function
// cardImgOne.addEventListener('click', flipCard);
// cardImgTwo.addEventListener('click', flipCard);
// cardImgThree.addEventListener('click', flipCard);
// cardImgFour.addEventListener('click', flipCard);

var gridEl = document.querySelector('.grid');
grid.addEventListener('click', flipCard);

//flip cards 
function flipCard(event) {
    // if the target matches a specific card's id, then set the attribute to that photoURLs id#
    if(event.target.matches('#cardImg1')) {
        cardImgOne.setAttribute('src', photoURLs[0])
        console.log(event.target);//this is not displaying currently
    }

    if(event.target.matches('#cardImg2')) {
        cardImgTwo.setAttribute('src', photoURLs[1])
        console.log(event.target);//this is not displaying currently
    }

    if(event.target.matches('#cardImg3')) {
        cardImgThree.setAttribute('src', photoURLs[2])
        console.log(event.target);//this is not displaying currently
    }

    if(event.target.matches('#cardImg4')) {
        cardImgFour.setAttribute('src', photoURLs[3])
        console.log(event.target);//this is not displaying currently
    }
    // cardImgTwo.setAttribute('src', photoURLs[1])
    // cardImgThree.setAttribute('src', photoURLs[2])
    // cardImgFour.setAttribute('src', photoURLs[3])
    // cardImgFive.setAttribute('src', photoURLs[4])
    // cardImgSix.setAttribute('src', photoURLs[5])
    // cardImgSeven.setAttribute('src', photoURLs[6])
    // cardImgEight.setAttribute('src', photoURLs[7])
    // cardImgNine.setAttribute('src', photoURLs[8])
    // cardImgTen.setAttribute('src', photoURLs[9])
    // cardImgEleven.setAttribute('src', photoURLs[10])
    // cardImgTwelve.setAttribute('src', photoURLs[11])
    // cardImgThirteen.setAttribute('src', photoURLs[12])
    // cardImgFourteen.setAttribute('src', photoURLs[13])
    // cardImgFifteen.setAttribute('src', photoURLs[14])
    // cardImgSixteen.setAttribute('src', photoURLs[15])

    //change cardID to src -- getAttribute src vs data-id - needs to be inside where method is called
    var cardSrc = event.target.getAttribute('src');
    // cardsChosen.push(photoURLs[cardSrc]); //maybe add .src
    cardsChosen.push(cardSrc);
    event.target.setAttribute('src', cardSrc)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
    }
}

// var flickrServerSrc = //pull out of json;
function settingBoard() {
    $.ajax({
        method: 'GET',
        url: 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=ab44015fa7a49dd092d72824c1d221fd&tags=animals&per_page=8&format=json&nojsoncallback=1',

        success: function (result) {
            console.log(result);
            //generate array of photo urls
            photoURLs = result.photos.photo.map(createPhotoUrl);
            console.log(photoURLs);
            //map can take each element of it and map to something array
            // photoURLs.forEach('img', i) x2 clone/2nd empty array to then Back-400sq into photoURL
            var photoDouble = [];
            console.log(photoURLs);
            for (var i = 0; i < photoURLs.length; ++i) {
                photoDouble.push(photoURLs[i]);
                photoDouble.push(photoURLs[i]);
            }
            photoURLs = photoDouble
            console.log(photoURLs);

            shuffleArray(photoURLs);
            console.log(photoURLs);

            

            
            

        },//end of success

        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }


    });


    /**
     * this function takes an object and returns a photo url
     * @param {*} obj 
     * @returns 
     */
    function createPhotoUrl(obj) {
        return 'https://live.staticflickr.com/' + obj.server + "/" + obj.id + "_" + obj.secret + "_m.jpg"; //this is working
        // return 'The '+ obj.Common-Name + ' lives in a'
    }
}
settingBoard(); //this and its function are working

//check for matches
function checkForMatch() {
    var cards = document.querySelectorAll('img');
    const optionOneSrc = cardsChosenSrc[0];
    const optionTwoSrc = cardsChosenSrc[1];
    if (cardsChosen[0] === cardsChosen[1]) {

        cards[optionOneSrc].setAttribute('src', 'assets/white-empty-square.png');
        cards[optionTwoSrc].setAttribute('src', 'assets/white-empty-square.png');
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneSrc].setAttribute('src', 'assets/Back-400sq.png');
        cards[optionTwoSrc].setAttribute('src', 'assets/Back-400sq.png');
    }

    cardsChosen = [];
    cardsChosenSrc = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === photoURLs.length / 2) {
        resultDisplay.textContent = "Congratulations! You've matched all of the cards!"
    }
}




//photoURLs is an array built by the createPhotoUrl & map method;
//
// function buildImages() {
//     for (var i = 0; i < photoURLs.length; i++) {
//         var card = document.createElement('img');
//         document.getElementsByClassName(card).appendChild(img);
//         console.log(photoURLs.length);
//         // card.setAttribute('a', 'img');
//         card.setAttribute('data-id', i);
//         //listen for click and invoke a flipcard function
//         card.addEventListener('click', flipCard);
//         grid.appendChild(card);
//     }
// }
// buildImages();



// for each item in array, creat an a href inside of div tag-with card class and attribute(s)?