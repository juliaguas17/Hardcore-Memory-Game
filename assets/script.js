
var apiKey = 'ab44015fa7a49dd092d72824c1d221fd';
const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenSrc = [];
let cardsWon = [];
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
    if (event.target.matches('#cardImg1')) {
        cardImgOne.setAttribute('src', photoURLs[0])
        console.log(event.target);
    }

    if (event.target.matches('#cardImg2')) {
        cardImgTwo.setAttribute('src', photoURLs[1])
        console.log(event.target);
    }

    if (event.target.matches('#cardImg3')) {
        cardImgThree.setAttribute('src', photoURLs[2])
        console.log(event.target);
    }

    if (event.target.matches('#cardImg4')) {
        cardImgFour.setAttribute('src', photoURLs[3])
        console.log(event.target);
    }

    if (event.target.matches('#cardImg5')) {
        cardImgFive.setAttribute('src', photoURLs[4])
        console.log(event.target);
    }

    if (event.target.matches('#cardImg6')) {
        cardImgSix.setAttribute('src', photoURLs[5])
        console.log(event.target);
    }

    if (event.target.matches('#cardImg7')) {
        cardImgSeven.setAttribute('src', photoURLs[6])
        console.log(event.target);
    }

    if (event.target.matches('#cardImg8')) {
        cardImgEight.setAttribute('src', photoURLs[7])
        console.log(event.target);
    }

    if (event.target.matches('#cardImg9')) {
        cardImgNine.setAttribute('src', photoURLs[8])
        console.log(event.target);
    }

    if (event.target.matches('#cardImg10')) {
        cardImgTen.setAttribute('src', photoURLs[9])
        console.log(event.target);
    }

    if (event.target.matches('#cardImg11')) {
        cardImgEleven.setAttribute('src', photoURLs[10])
        console.log(event.target);
    }

    if (event.target.matches('#cardImg12')) {
        cardImgTwelve.setAttribute('src', photoURLs[11])
        console.log(event.target);
    }

    if (event.target.matches('#cardImg13')) {
        cardImgThirteen.setAttribute('src', photoURLs[12])
        console.log(event.target);
    }

    if (event.target.matches('#cardImg14')) {
        cardImgFourteen.setAttribute('src', photoURLs[13])
        console.log(event.target);
    }

    if (event.target.matches('#cardImg15')) {
        cardImgFifteen.setAttribute('src', photoURLs[14])
        console.log(event.target);
    }

    if (event.target.matches('#cardImg16')) {
        cardImgSixteen.setAttribute('src', photoURLs[15])
        console.log(event.target);
    }

    //change cardID to src -- getAttribute src vs data-id - needs to be inside where method is called
    var cardSrc = event.target.getAttribute('src');
    console.log(cardSrc);
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
        },
        //end of ajax success

        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
        //end of ajax error
    });

    /**
     * this function takes an object and returns a photo url  -- Lawrence helped with this syntax for the CreatePhotoURL and the @ param and returns
     * @param {*} obj 
     * @returns 
     */
    function createPhotoUrl(obj) {
        return 'https://live.staticflickr.com/' + obj.server + "/" + obj.id + "_" + obj.secret + "_m.jpg"; //this is working
        // return 'The '+ obj.Common-Name + ' lives in a'
    }
}
settingBoard(); //this and its function are working

//check for matches and flip back to back of card or white space
function checkForMatch() {
    var cards = document.querySelectorAll('img');
    console.log(cards);
    const optionOneSrc = cardSrc[0];
    const optionTwoSrc = cardSrc[1];
    console.log(optionOneSrc);
    console.log(optionTwoSrc);

    
    if (optionOneSrc === optionTwoSrc) {
        // you clicked on the same card
        cards[optionOneSrc].setAttribute('src', 'assets/Image/Back-400sq.jpg');
        cards[optionTwoSrc].setAttribute('src', 'assets/Image/Back-400sq.jpg');
    } 
    else if (cardsChosen[0] === cardsChosen[1]) {
        // you found a match -- win
        cards[optionOneSrc].setAttribute('src', 'assets/Images/white-empty-square.png');
        cards[optionTwoSrc].setAttribute('src', 'assets/Images/white-empty-square.png');
        cards[optionOneSrc].removeEventListener('click', flipCard);
        cards[optionTwoSrc].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);

    }
    else {
        // not a match
        cards[optionOneSrc].setAttribute('src', 'assets/Image/Back-400sq.jpg');
        cards[optionTwoSrc].setAttribute('src', 'assets/Image/Back-400sq.jpg');
    }   
    
    cardsChosen = [];
    cardsChosenSrc = [];

    resultDisplay.textContent = cardsWon.length;
    
    if (cardsWon.length === photoURLs.length / 2) {
        resultDisplay.textContent = "Congratulations! You've matched all of the cards!"
    }
}
