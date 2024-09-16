"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    const originalSentence = req.body.text;
    const translatedSentence = translator.translate(
      originalSentence,
      "British"
    );
    res.json({ text: originalSentence, translation: translatedSentence });
  });
};

// You can POST to /api/translate with a body containing text with the text to translate and locale with either american-to-british or british-to-american. The returned object should contain the submitted text and translation with the translated text.

// If one or more of the required fields is missing, return { error: 'Required field(s) missing' }.
// If text is empty, return { error: 'No text to translate' }
// If locale does not match one of the two specified locales, return { error: 'Invalid value for locale field' }.
// If text requires no translation, return "Everything looks good to me!" for the translation value.
