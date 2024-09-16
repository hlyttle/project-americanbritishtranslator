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
    for (const word of Object.keys(americanToBritishTitles)) {
      let pattern = new RegExp(phraseStart + word + phraseEnd);
      if (lowerSentence.match(pattern)) {
        let startPoint = lowerSentence.indexOf(word);
        let endPoint = startPoint + word.length;
        translatedSentence =
          translatedSentence.slice(0, startPoint) +
          americanToBritishTitles[word][0].toUpperCase() +
          americanToBritishTitles[word].slice(1) +
          translatedSentence.slice(endPoint);
      }
    }
    console.log(translatedSentence);
    return translatedSentence;
  }
}

//current issue - titles need to be returned with a capital letter

//repeat with titles (keys or actual word as relevant)
//a : between two numbers is turned to a ., or vice versa, and the whole number is wrapped
//puts highlight span around any changed words

module.exports = Translator;
