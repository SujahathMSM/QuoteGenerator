
// Accessing the elemenet from HTML
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote")
const quoteAuthor= document.getElementById("author")
const tweetBtn = document.getElementById("twitter")
const quoteBtn = document.getElementById("new-quote")
const loader = document.getElementById("loader")

function startLoading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function endLoading(){
    quoteContainer.hidden= false;
    loader.hidden = true;
}
async function getQuotes(){
    //Starting the loading
    startLoading();
    const url = 'https://famous-quotes4.p.rapidapi.com/random?category=all&count=1';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'fcf92bf73emsh27c6055cc4a403ap1c97ffjsn3af9bd7cccd8',
        'x-rapidapi-host': 'famous-quotes4.p.rapidapi.com'
      }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        // Checking for author verification

        if (result[0].author === ''){
            quoteAuthor.textContent = "unknown"
        } else {
            quoteAuthor.textContent = result[0].author;
        }

        //Checking the text length
        if(result[0].text.length > 120){
            quoteText.classList.add("long-quote")
        } else {
            quoteText.classList.remove("long-quote");
        }

        endLoading();
        quoteText.textContent = result[0].text;
        
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}


// Function for tweet the generated Quote
function tweetQuote(){
    const text = quoteText.textContent;
    const autor = quoteAuthor.textContent;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${text} - ${autor}`;
    window.open(twitterUrl, "_blank")
}

// Adding event Listeners for both buttons
tweetBtn.addEventListener("click", tweetQuote)
quoteBtn.addEventListener("click", getQuotes)
getQuotes();
