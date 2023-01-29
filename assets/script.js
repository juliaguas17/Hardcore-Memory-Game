
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
            //map can take each element of it and map to something array
            // photoURLs.forEach('img', i)
            // document.getElementsByClassName(card).appendChild(img);
            for (var i = 0; i < photoURLs.length; i++) {
                var cardImg = document.createElement('img');
                document.getElementsByID(card).appendChild(img);
                cardImg.setAttribute('src', 'assets/white-empty-square.png');
                console.log(photoURLs.length);
                // card.setAttribute('a', 'img');
                cardImg.setAttribute('data-id', i);
                //listen for click and invoke a flipcard function
                cardImg.addEventListener('click', flipCard);
                grid.appendChild(cardImg);
            }
        },

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
        return 'https://live.staticflickr.com/' + obj.server + "/" + obj.id + "_" + obj.secret + "_s.jpg"; //this is working
        // return 'The '+ obj.Common-Name + ' lives in a'
    }
}
returnData(); //this and its function are working

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