const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
  translate(sentence, desiredLanguage) {
    let translatedSentence = sentence;
    let objectToCheck = {};
    let titlesObject = {};
    if (desiredLanguage === "British") {
      objectToCheck = {
        ...americanToBritishSpelling,
        ...americanOnly,
      };
      titlesObject = { ...americanToBritishTitles };
    } else if (desiredLanguage === "American") {
      objectToCheck = { ...britishOnly };
      for (const key of Object.keys(americanToBritishSpelling)) {
        objectToCheck[americanToBritishSpelling[key]] = key;
      }
      for (const key of Object.keys(americanToBritishTitles)) {
        titlesObject[americanToBritishTitles[key]] = key;
      }
    } else {
      return "Invalid value for locale field";
    }
    const phraseStart = "(^| )";
    const phraseEnd = "([ .,!?):;-])";
    for (const word of Object.keys(objectToCheck)) {
      let lowerSentence = translatedSentence.toLowerCase();
      let pattern = new RegExp(phraseStart + word + phraseEnd);
      if (lowerSentence.match(pattern)) {
        let startPoint = lowerSentence.indexOf(word);
        let endPoint = startPoint + word.length;
        translatedSentence =
          translatedSentence.slice(0, startPoint) +
          "<span class='highlight'>" +
          objectToCheck[word] +
          "</span>" +
          translatedSentence.slice(endPoint);
      }
    }
    for (const word of Object.keys(titlesObject)) {
      let lowerSentence = translatedSentence.toLowerCase();
      let pattern = new RegExp(phraseStart + word + phraseEnd);
      if (lowerSentence.match(pattern)) {
        let startPoint = lowerSentence.indexOf(word);
        let endPoint = startPoint + word.length;
        translatedSentence =
          translatedSentence.slice(0, startPoint) +
          "<span class='highlight'>" +
          titlesObject[word][0].toUpperCase() +
          titlesObject[word].slice(1) +
          "</span>" +
          translatedSentence.slice(endPoint);
      }
    }
    const timePattern =
      desiredLanguage === "British"
        ? /[0-2]?[0-9]:[0-5][0-9]/
        : /[0-2]?[0-9].[0-5][0-9]/;
    let timeToChange = translatedSentence.match(timePattern);
    if (timeToChange) {
      let newTime =
        desiredLanguage === "British"
          ? timeToChange[0].replace(":", ".")
          : timeToChange[0].replace(".", ":");
      translatedSentence = translatedSentence.replace(
        timeToChange[0],
        "<span class='highlight'>" + newTime + "</span>"
      );
    }
    return translatedSentence;
  }
}

module.exports = Translator;
