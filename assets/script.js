// card options
const cardArray = [];


//https://live.staticflickr.com/{server-id}/{id}_{secret}.jpg
// https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg
// { "id": "52650717452", "owner": "30706946@N00", "secret": "f3aac9950a", "server": "65535", "farm": 66, "title": "Another Idiom", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
// https://live.staticflickr.com/65535/52650717452_f3aac9950a_s.jpg

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
            //pass that array into a function
            //map can take each element of it and map to something array
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    })
}
returnData();

/**
 * this function takes an object and returns a photo url
 * @param {*} obj 
 * @returns 
 */
function createPhotoUrl(obj) {
    return 'https://live.staticflickr.com/' + obj.server + "/" + obj.id + "_" + obj.secret + "_s.jpg";

    // return 'The '+ obj.Common-Name + ' lives in a'
} 