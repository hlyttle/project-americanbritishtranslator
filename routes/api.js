"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    if (req.body.text === "") {
      res.json({ error: "No text to translate" });
      return;
    }
    if (
      !Object.keys(req.body).includes("text") ||
      !Object.keys(req.body).includes("locale")
    ) {
      res.json({ error: "Required field(s) missing" });
      return;
    }
    const originalSentence = req.body.text;
    const translatedSentence = translator.translate(
      originalSentence,
      req.body.locale
    );
    if (originalSentence === translatedSentence) {
      res.json({
        text: originalSentence,
        translation: "Everything looks good to me!",
      });
      return;
    } else if (translatedSentence === "Invalid value for locale field") {
      res.json({ error: translatedSentence });
      return;
    } else {
      res.json({ text: originalSentence, translation: translatedSentence });
      return;
    }
  });
};
