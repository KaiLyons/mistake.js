// Get the packages for this mistake
var kamojify = require("kamojify");
var hewwwo = require("hewwwo");
var lorem = require("loremip");

// Loremip array
var a = ["cuddles", "snuggles", "hello", "greetings", "licks", "orange", "red", "ready"];

// Loremip generate
var g = lorem.generate(a, 50);

// Hewwwo
var f = hewwwo(g);

// Kamojify
var str = f;
var kf = kamojify(str);

//Finish it all off
console.log(kf)