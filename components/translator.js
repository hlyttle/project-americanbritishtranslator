const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
  translate(sentence, desiredLanguage) {
    let splitSentence = sentence.split(" ");
    let newArray = splitSentence.map((word) => {
      if (Object.keys(americanToBritishSpelling).includes(word)) {
        return americanToBritishSpelling[word];
      } else {
        return word;
      }
    });
    console.log(newArray);
    return newArray.join(" ");
  }
}

//take a string and an desired language
//split the string by spaces ** THIS WON'T WORK as some are phrases, not words
//lower case full sentence and do a sentence.includes? but what about parts of words?
//do i need to check if before it is anything other than a space or nothing, and after it is anything other than a space or punctuation or nothing?
//check for each word (lower case) in relevant dictionary.keys
//if not there, continue
//if present, replace with relevant word, capitalising first letter if necessary
//repeat with titles (keys or actual word as relevant)
//repeat with spelling (keys or actual word as relevant)
//a : between two numbers is turned to a ., or vice versa, and the whole number is wrapped
//puts highlight span around any changed words
//return translated string (api can handle something with no changes)

module.exports = Translator;
