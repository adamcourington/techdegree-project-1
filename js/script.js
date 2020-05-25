/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "I hear I forget, I see I remember, I do I understand.",
    source: "Confucius"
  },
  {
    quote: "Not all those who wander are lost.",
    source: "J.R.R. Tolkien",
    citation: "The Lord of the Rings",
    year: "1954" 
  },
  {
    quote: "Just keep swimming.",
    source: "Dory",
    citation: "Finding Nemo",
    year: "2003" 
  },
  {
    quote: "There's no crying in baseball!",
    source: "Jimmy Dugan ",
    citation: "A League of Their Own",
    year: "1992" 
  },
  {
    quote: "I feel the need - the need for speed!",
    source: 'Lt. Pete "Maverick" Mitchell',
    citation: "Top Gun",
    year: "1986" 
  },
  {
    quote: "Carpe diem.  Seize the day, boys. Make your lives extraordinary.",
    source: "John Keating",
    citation: "Dead Poets Society",
    year: "1989" 
  },
  {
    quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
    source: "Mark Twain"
  },
  {
    quote: "Those who dare to fail miserably can achieve greatly.",
    source: "John F. Kennedy"
  },
  {
    quote: "Love is a serious mental disease.",
    source: "Plato"
  },
  {
    quote: "It is our choices, that show what we truly are, far more than our abilities.",
    source: "Albus Dumbledore",
    citation: "Harry Potter and the Chamber of Secrets ",
  }

];

/***
 * `getRandomQuote` function
***/
function getRandomQuote () {
  const randomNumber =  Math.floor(Math.random() * 10);
  let randomQuote = quotes[randomNumber];
  return randomQuote;  
}

var red;
var green;
var blue;
var rgbColor;



function randomRGB() {
	return Math.floor(Math.random() * 256);
}

/***
 * `printQuote` function
***/
function printQuote () {
  let object = getRandomQuote();
  let display = `<p class="quote"> ${object.quote} </p>`;
  display += `<p class="source"> ${object.source} `;
  if ( object.citation !== undefined ){
    display += `<span class="citation">  ${object.citation}</span>`;   
  }
  if (object.year !== undefined ) {
    display += `<span class="year"> ${object.year}</span>`;
  }
  display += `</p>`
  randomRGB();
    for (let i = 0; i <=10; i++) {
      red = randomRGB();
      green = randomRGB();
      blue = randomRGB();
      rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
      
    }
  document.getElementById('quote-box').innerHTML = display;
  document.body.style.backgroundColor = rgbColor;
  
}

/***
 *  `timing` function
 ***/
function timing (seconds) {
  setInterval(printQuote, seconds * 1000);
}

timing(10);
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);