//API key	uC6CsrKOpLvqkHaklwGh6uV8LwfEqa5t4GsVnRYFpbGD5a58OzhIGQGQk86DMX1C
//Client ID	U7WHdyA6jueqIJWOJH775Wqqn4ZlhybDLxZHvoTx9NJoMyQLNdbwXWy4vKi5IDqn

var APIkey = 'uC6CsrKOpLvqkHaklwGh6uV8LwfEqa5t4GsVnRYFpbGD5a58OzhIGQGQk86DMX1C';
var fullAPIkey = 'Bearer ' + APIkey; //is working

console.log(fullAPIkey);
// Declare global variables

//Need to decide how many different animals. 3-5 

function fetchIcon() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: fullAPIkey, //is working
        }
    };
    console.log(options); //is working

    fetch('https://api.iconfinder.com/v4/icons/search?query=arrow&count=10', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

fetchIcon();
