const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {}

//take a string and an desired language
//split the string by spaces
//check for each word (lower case) in relevant dictionary.keys
//if not there, continue
//if present, replace with relevant word, capitalising first letter if necessary
//repeat with titles (keys or actual word as relevant)
//repeat with spelling (keys or actual word as relevant)
//return original string + new string (api can handle something with no changes)

module.exports = Translator;
