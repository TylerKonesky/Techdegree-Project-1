/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
coded by - Tyler Konesky
******************************************/



/*** 
Below is a list of quotes returned by a google search. 
The list of quotes can biew viewed in a browser via the console.
Each quote has the option of including the quote, author, citation, and year.
***/
var quotes = [
  {
    quote: 'You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.',
    source: 'Dr. Suess',
    citation: '',
    year: ''
  },

  {
    quote: 'Get busy living or get busy dying.',
    source: 'Stephen King',
    citation: '',
    year: ''
  },

  {
    quote: 'When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.',
    source: 'Helen Keller',
    citation: 'Unknown',
    year: ''
  },

  {
    quote: 'When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.',
    source: 'Audre Lorde',
    citation: '',
    year: ''
  },

  {
    quote: 'Finding good quotes with dates and citations is very difficult!!',
    source: 'Tyler Konesky',
    citation: 'text message sent to friends',
    year: '2019'
  },

];

console.log(quotes)

/***
Below is a function that will pull a random quote from the
above list of quotes in the "quotes" array. 

Inside the function a random number generator will pull 
random numbers based on the length of the above array. 

The random quote will then return a full random quote 
object from within the quotes array. 
***/

function randomQuote(){
  var randomNumber = Math.floor(Math.random() * quotes.length);
  console.log('what is the number?', randomNumber)
  console.log('test quote', quotes[randomNumber])
  return quotes[randomNumber]
}

/***
The pringQuote function will utilize the above array and quote function. 
Once that function returns an object from the array it will go through 
the object to identify the quote and the author to display on the webpage.

If applicable, the function will also identify if there is a citation or
a year and will display them accordingly to the webpage.  
***/
function printQuote(){
  var htmlString = '';
  var getQuote = randomQuote();
  
  htmlString += '<p class="quote">' + getQuote.quote + '</p>';
  htmlString += '<p class="source">' + getQuote.source;
  if(getQuote.citation){
    htmlString += '<span class="citation">' + getQuote.citation;
  }
  if(getQuote.year){
    htmlString += '<span class="year">' + getQuote.year;
  }
  htmlString += '</p>'
  console.log('did this work?', htmlString)
  document.getElementById('quote-box').innerHTML = htmlString

//<p class="source">Patrick McKenzie<span class="citation">Twitter</span><span class="year">2016</span></p>
}



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.