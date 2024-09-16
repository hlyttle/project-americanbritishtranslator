const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
  translate(sentence, desiredLanguage) {
    let finalChar = sentence[sentence.length - 1];
    let trimmedSentence = sentence.slice(0, -1);
    let splitSentence = trimmedSentence.split(" ");
    let newArray = splitSentence.map((word) => {
      if (Object.keys(americanToBritishSpelling).includes(word)) {
        return americanToBritishSpelling[word];
      } else if (Object.keys(americanOnly).includes(word)) {
        return americanOnly[word];
      } else {
        return word;
      }
    });
    console.log(newArray);
    return newArray.join(" ") + finalChar;
  }
}
// current problem - if the word is followed by a punctuation mark it is included when it is split
// start by removing this and saving to a variable, replace at end

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
