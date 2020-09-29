


// get quote from API
// ? used for query
async function getQuote(){
    //proxytapiurl 
    const proxyUrl='https://cors-anywhere.herokuapp.com'
const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang="en"&format=json';

//try and catch errors
//data is fatched and wait till it comes then load into json and display
try {
    const response = await fetch(proxyUrl+apiUrl);
    const data = await response.json();
    console.log(data);
} catch (error) {
    // getQuote();
    console.log("Ooops! No quote.. " ,error);

}
}

// on load function should be fetched

getQuote();