const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
  translate(sentence, desiredLanguage) {
    let lowerSentence = sentence.toLowerCase();
    let translatedSentence = sentence;
    let objectToCheck = {
      ...americanToBritishSpelling,
      ...americanOnly,
    };
    const phraseStart = "(^| )";
    const phraseEnd = "([ .,!?):;-])";
    for (const word of Object.keys(objectToCheck)) {
      let pattern = new RegExp(phraseStart + word + phraseEnd);
      if (lowerSentence.match(pattern)) {
        let startPoint = lowerSentence.indexOf(word);
        let endPoint = startPoint + word.length;
        translatedSentence =
          translatedSentence.slice(0, startPoint) +
          objectToCheck[word] +
          translatedSentence.slice(endPoint);
      }
    }
    console.log(
      translatedSentence[0].toUpperCase() + translatedSentence.slice(1)
    );
    return translatedSentence[0].toUpperCase() + translatedSentence.slice(1);
  }
}
// current problem - everything is staying lower case, like names and 'i'
// search through lower case, find the start and end indices, then return string.slice to that index, plus new word, plus string.slice to end

//repeat with titles (keys or actual word as relevant)
//repeat with spelling (keys or actual word as relevant)
//a : between two numbers is turned to a ., or vice versa, and the whole number is wrapped
//puts highlight span around any changed words

module.exports = Translator;
