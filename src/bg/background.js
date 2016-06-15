var lib = require('thoughts');
var uniqueRandomArray = require('unique-random-array');

var randomQuote = lib.random();
var bg_colors=["brown","pink","blue","red"];
var randomColor = uniqueRandomArray(bg_colors);
window.onload = function(){
  document.getElementById('thought').innerHTML = randomQuote.thought;
  document.getElementById('author').innerHTML = randomQuote.author;
  document.getElementById('container').className='colorize-bg-'+randomColor();
};

