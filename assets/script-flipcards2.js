document.addEventListener('DOMContentLoaded', () => {

    // card options
    var apiKey = 'ab44015fa7a49dd092d72824c1d221fd';

    // var flickrServerId = //pull out of json;
    function returnData() {
        $.ajax({
            method: 'GET',
            url: 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=ab44015fa7a49dd092d72824c1d221fd&tags=animals&per_page=8&format=json&nojsoncallback=1',

            success: function (result) {
                console.log(result);
                //generate array of photo urls
                let photoURLs = result.photos.photo.map(createPhotoUrl);
                console.log(photoURLs);

                photoURLs.sort(() => 0.5 - Math.random());

                const grid = document.querySelector('.grid');
                const resultDisplay = document.querySelector('#result');
                var cardsChosen = [];
                var cardsChosenId = [];
                var cardsWon = [];

                //create the board
                function createBoard() {
                    for (let i = 0; i < cardArray.length; i++) {
                        var card = document.createElement('img');
                        card.setAttribute('src', 'assets/Back-200sq.jpg');
                        card.setAttribute('data-id', i);
                        //listen for click and invoke a flipcard function
                        card.addEventListener('click', flipCard);
                        grid.appendChild(card);
                    }
                }

                //check for matches
                function checkForMatch() {
                    var cards = document.querySelectorAll('img');
                    const optionOneId = cardsChosenId[0];
                    const optionTwoId = cardsChosenId[1];
                    if (cardsChosen[0] === cardsChosen[1]) {
                        alert('You found a match!');
                        cards[optionOneId].setAttribute('src', 'assets/white-empty-square.png');
                        cards[optionTwoId].setAttribute('src', 'assets/white-empty-square.png');
                        cardsWon.push(cardsChosen);
                    } else {
                        alert('Not a match');
                        cards[optionOneId].setAttribute('src', 'assets/Back-200sq.jpg');
                        cards[optionTwoId].setAttribute('src', 'assets/Back-200sq.jpg');
                    }
                    cardsChosen = [];
                    cardsChosenId = [];
                    resultDisplay.textContent = cardsWon.length;
                    if (cardsWon.length === photoURLs.length / 2) {
                        resultDisplay.textContent = "Congratulations! You've matched all of the cards!"
                    }
                }


                //flip cards
                function flipCard() {
                    var cardId = this.getAttribute('data-id');
                    cardsChosen.push(photoURLs[cardId].name);
                    cardsChosen.push(cardId);
                    this.setAttribute('src', photoURLs[cardId].img)
                    if (cardsChosen.length === 2) {
                        setTimeout(checkForMatch, 500);
                    };
                }


                createBoard();

        }