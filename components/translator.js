const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
  translate(sentence, desiredLanguage) {
    let lowerSentence = sentence.toLowerCase();
    let translatedSentence = sentence;
    let objectToCheck = {};
    if (desiredLanguage === "British") {
      objectToCheck = {
        ...americanToBritishSpelling,
        ...americanOnly,
      };
    } else if (desiredLanguage === "American") {
      objectToCheck = { ...britishOnly };
      for (const key of Object.keys(americanToBritishSpelling)) {
        objectToCheck[americanToBritishSpelling[key]] = key;
      }
    } else {
      return "Please select a valid language option";
    }
    console.log(Object.keys(objectToCheck)[2]);
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
    const timePattern = /[0-2]?[0-9]:[0-5][0-9]/;
    let timeToChange = translatedSentence.match(timePattern);
    if (timeToChange) {
      let newTime = timeToChange[0].replace(":", ".");
      translatedSentence = translatedSentence.replace(timeToChange[0], newTime);
    }

    console.log(translatedSentence);
    return translatedSentence;
  }
}

//puts highlight span around any changed words

module.exports = Translator;
