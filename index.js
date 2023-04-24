// get elements by id from our html and assign variables
const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("joke")

// set our api key for fetching data
const apikey = "x8S3BjwjIluUBnTKqJo6UA==gjkabjI43jlB6F7L";
// define our options variable by assigning method and headers
const options = {
    method: "GET",
    headers: {
        "X-Api-Key":apikey,
    },
};
// set our api url
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"
// define a function and use async in order to wait while fetching data
async function getJoke(){
    // use try catch in order to catch errors if any
    try {
        // change our inner text of joke id
    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading!"
    // fetch our data from the api using apiurl and options
    const response = await fetch(apiURL,options)
    // convert into json
    const data = await response.json()
    // enable the button after data fetched
    btnEl.disabled = false;
    btnEl.innerText = "tell me a joke"
    // reference the data at index 0 to output the joke
    jokeEl.innerText = data[0].joke;
    } catch (error) {
        // render our error
        jokeEl.innerText = "An error happened, Try again Later";
        console.log(error);
    }


}
// add event listener to click and after clicked reference our function getJoke
btnEl.addEventListener("click", getJoke)