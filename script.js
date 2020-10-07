// get quote from API
// ? used for query

//on load

// var used in try and catch statement
const quoteContainer= document.getElementById("quote-container");
const quoteText= document.getElementById("quote-text");
const quoteAuthor= document.getElementById("quote-author");
const twitterBtn= document.getElementById("twitter");
const newquoteBtn= document.getElementById("new-quote");
const loader = document.getElementById("loader");


function showLoadingSpinner(){
    loader.hidden = false;
    quoteContainer.hidden =true; 
}

function removeLoadingSpinner(){
    loader.hidden= true;
    quoteContainer.hidden= false;
}
async function getQuote(){
    const proxyUrl ='https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';

//try and catch errors
//data is fatched and wait till it comes then load into json and display
try {
    showLoadingSpinner();
    const response = await fetch(proxyUrl+apiUrl);
    const data = await response.json();
    if(data.quoteAuthor===""){
        data.quoteAuthor="Anonymus";
    }
    else{
        quoteAuthor.innerText= data.quoteAuthor;
    }

    //reduce font size foor long quote
    if(data.quoteText.length>120){
        quoteText.classList.add("long-quote");
    }
    else{
        quoteText.classList.remove("long-quote");
    }
    quoteText.innerText = data.quoteText;
    removeLoadingSpinner();
    //code breaks here
    // throw new error("oops!");
   } catch (error) {
    getQuote();
    console.log("Ooops! No quote.. " ,error);

}
}

function tweetQuote(){
    const author = quoteAuthor.innerText;
    const quote = quoteText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote}- ${author}`;

    window.open(twitterUrl,"_blank");
}

//add event listner
twitterBtn.addEventListener("click",tweetQuote);
newquoteBtn.addEventListener("click",getQuote);

//event Listner
getQuote();