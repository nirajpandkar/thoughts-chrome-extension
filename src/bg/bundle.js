(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var uniqueRandomArray = require("unique-random-array");
var allThoughts = require("./thoughts.json");
module.exports = {
    random:random,
    all:allThoughts,
    particular:particular
};
function random(category){
    if(category == null) {
        var randomCategory = uniqueRandomArray(allThoughts.categories);
        var randomQuote = uniqueRandomArray(allThoughts[randomCategory()]);
        return randomQuote();
    }
    else{
        var quote = uniqueRandomArray(allThoughts[category]);
        return quote();
    }
}

function particular(category,n){
    if(n<0 || n>=allThoughts[category].length)
        return "Index out of bound";
    else if(n == null || category == null)
        return "Either index or category is missing!";
    else{
        return allThoughts[category][n];
    }
}
//var lib = require("./src/index.js");lib.particular();
},{"./thoughts.json":2,"unique-random-array":3}],2:[function(require,module,exports){
module.exports={
  "categories":[
    "startup",
    "anonymous"
  ],
  "startup": [
    {
      "author": "Sachin and Binny Bansal",
      "thought": "The core of any business is to earn money. You have not done your job well until you find a stranger who is willing to open his/her wallet to give you money for the service/products that you are offering."
    },
    {
      "author": "Bhavish Aggarwal",
      "thought": "Go out and start up. It is the hardest thing to do. For me it was very hard. When I started, my parents thought I was going to become a travel agent. It was very hard to convince them that I was not."
    },
    {
      "author": "Kunal Bahl",
      "thought": "Scale is important for a startup. Think big, but take one day at a time."
    },
    {
      "author": "Vijay Shekhar Sharma",
      "thought": "Be so sharp that you cut"
    },
    {
      "author": "Naveen Tewari",
      "thought": "Entrepreneurship is all about how confident you are in changing something, because most of the people will not accept that change so go ahead and learn it."
    },
    {
      "author": "Ritesh Agarwal",
      "thought": "It is extremely important to build something that a 100 people absolutely love using rather than make something that a 1000 people would just, kind of, like."
    },
    {
      "author": "Shashank ND",
      "thought": "The goal has never been about being an entrepreneur or starting a company. It has always been about solving a problem we deeply care about."
    },
    {
      "author": "Deepinder Goyal",
      "thought": "The fundamental model of our business is that in mature markets we should make profits and they shouldn’t need any more outside money to grow."
    },
    {
      "author": "Kunal Shah",
      "thought": "If you fully accept the worst that can ever happen in your journey, fear won’t ever be an obstacle in starting-up."
    },
    {
      "author": "Rahul Yadav",
      "thought": "Life’s purpose is to be happy! So if you are happy, you are successful in life"
    }
  ],
  "anonymous":[
    {
      "author": "Anonymous",
      "thought": "Work till you get what you want"
    },
    {
      "author": "Anonymous",
      "thought": "Don't let the choice that you didn't make weigh you down."
    },
    {
      "author": "Anonymous",
      "thought": "I don't plan on being famous, but I do plan on living the dream."
    },
    {
      "author": "Anonymous",
      "thought": "Don't give up because things are hard, but work harder, when you think of giving up."
    },
    {
      "author": "Anonymous",
      "thought": "Be with people who know your VALUE, not your PRICE."
    },
    {
      "author": "Anonymous",
      "thought": "Sometimes the best discoveries are the result of simple observations"
    },
    {
      "author": "Anonymous",
      "thought": "Be the Motivation, not the Distraction"
    },
    {
      "author": "Anonymous",
      "thought": "If you are depressed, you are living in the past. If you are anxious, you are living in the future. If you are at peace, you are living in the present."
    }
  ]
}

},{}],3:[function(require,module,exports){
'use strict';
var uniqueRandom = require('unique-random');

module.exports = function (arr) {
	var rand = uniqueRandom(0, arr.length - 1);

	return function () {
		return arr[rand()];
	};
};

},{"unique-random":4}],4:[function(require,module,exports){
'use strict';
module.exports = function (min, max) {
	var prev;
	return function rand() {
		var num = Math.floor(Math.random() * (max - min + 1) + min);
		return prev = num === prev && min !== max ? rand() : num;
	};
};

},{}],5:[function(require,module,exports){
var lib = require('thoughts');
var randomQuote = lib.random();
window.onload = function(){
  document.getElementById('thought').innerHTML = randomQuote.thought;
  document.getElementById('author').innerHTML = randomQuote.author;
};
},{"thoughts":1}]},{},[5]);
