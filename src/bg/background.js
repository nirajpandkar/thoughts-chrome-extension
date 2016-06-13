var lib = require('thoughts');
var randomQuote = lib.random();
window.onload = function(){
  document.getElementById('thought').innerHTML = randomQuote.thought;
  document.getElementById('author').innerHTML = randomQuote.author;
};