const blockquote = document.querySelector('blockquote');
const figcaption = document.querySelector('figcaption');
const btnTwo = document.querySelector('.btn-two');

async function getQuote() {  
   const url = `https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en`;
   const res = await fetch(url);
   const data = await res.json(); 
   blockquote.textContent = data.quoteText;
   figcaption.textContent = data.quoteAuthor;
 }
 document.addEventListener('DOMContentLoaded', getQuote);
 btnTwo.addEventListener('click', getQuote);