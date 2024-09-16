const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
  translate(sentence, desiredLanguage) {
    let translatedSentence = sentence.toLowerCase();
    for (const word of Object.keys(americanToBritishSpelling)) {
      if (translatedSentence.includes(word)) {
        translatedSentence = translatedSentence.replace(
          word,
          americanToBritishSpelling[word]
        );
      }
    }
    const phraseStart = "(^| )";
    const phraseEnd = "([ .,!?):;-])";
    for (const word of Object.keys(americanOnly)) {
      let pattern = new RegExp(phraseStart + word + phraseEnd);
      if (translatedSentence.match(pattern)) {
        translatedSentence = translatedSentence.replace(
          word,
          americanOnly[word]
        );
      }
    }
    return translatedSentence[0].toUpperCase() + translatedSentence.slice(1);
  }
}
//current problem - neds to search for lower case versions
//take lower case sentence, but re-capitalise first letter before return

//repeat with titles (keys or actual word as relevant)
//repeat with spelling (keys or actual word as relevant)
//a : between two numbers is turned to a ., or vice versa, and the whole number is wrapped
//puts highlight span around any changed words

module.exports = Translator;
