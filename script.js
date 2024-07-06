// let apiQuotes = [];

// Accessin the elements
const quoteContainer = document.getElementById("quote-container")
const quoteText = document.getElementById("quote")
const authorText = document.getElementById("author")
const tweetBtn = document.getElementById("twitter")
const quoteBtn = document.getElementById("new-quote")
const loader = document.getElementById("loader");


//functio for gettig single new quote from apiQote

function loading () {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
    
}

function newQuote(){
    loading();
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)]

    // checking if an author is available or not
    if (!quote.author){
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }

    // Check quote length to determine styling
    if (quote.text.length > 120){
        quoteText.classList.add("long-quote");
    } else {
        quoteText.classList.remove("long-quote");
    }

    quoteText.innerText = quote.text;
    complete();
    
    console.log(quote.text)

}
// function for fetching codes
// async function getQuote(){
//     try{
//         const url = "https://type.fit/api/quotes";
//         const response = await fetch(url);
//         apiQuotes = await response.json();
//         newQuote();
//     } catch (error){
//         console.log(error)
//     }
// }

// Tweet the quote

function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent}-${authorText.textContent}`;
    window.open(twitterUrl, "_blank")
}

// Add Event Listeners
quoteBtn.addEventListener("click", newQuote)
tweetBtn.addEventListener("click", tweetQuote)
//Loading the Quotes
newQuote();

