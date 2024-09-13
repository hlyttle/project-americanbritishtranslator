const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
const translator = new Translator();

suite("Unit Tests", () => {
  suite("Translating to British English", () => {
    test("favorite", () => {
      assert.equal(
        translator.translate("Mangoes are my favorite fruit.", "British"),
        "Mangoes are my <span class='highlight'>favourite</span> fruit."
      );
    });
    test("yogurt", () => {
      assert.equal(
        translator.translate("I ate yogurt for breakfast.", "British"),
        "I ate <span class='highlight'>yoghurt</span> for breakfast."
      );
    });
    test("condo", () => {
      assert.equal(
        translator.translate("We had a party at my friend's condo.", "British"),
        "We had a party at my friend's <span class='highlight'>flat</span>."
      );
    });
    test("trashcan", () => {
      assert.equal(
        translator.translate(
          "Can you toss this in the trashcan for me?",
          "British"
        ),
        "Can you toss this in the <span class='highlight'>bin</span> for me?"
      );
    });
    test("parking lot", () => {
      assert.equal(
        translator.translate("The parking lot was full.", "British"),
        "The <span class='highlight'>car park</span> was full."
      );
    });
    test("Rube Goldberg machine", () => {
      assert.equal(
        translator.translate(
          "Like a high tech Rube Goldberg machine.",
          "British"
        ),
        "Like a high tech <span class='highlight'>Heath Robinson device</span>."
      );
    });
    test("play hooky", () => {
      assert.equal(
        translator.translate(
          "To play hooky means to skip class or work.",
          "British"
        ),
        "To <span class='highlight'>bunk off</span> means to skip class or work."
      );
    });
    test("Mr.", () => {
      assert.equal(
        translator.translate("No Mr. Bond, I expect you to die.", "British"),
        "No <span class='highlight'>Mr</span> Bond, I expect you to die."
      );
    });
    test("Dr.", () => {
      assert.equal(
        translator.translate("Dr. Grosh will see you now.", "British"),
        "<span class='highlight'>Dr</span> Grosh will see you now."
      );
    });
    test("digital times", () => {
      assert.equal(
        translator.translate("Lunch is at 12:15 today.", "British"),
        "Lunch is at <span class='highlight'>12.15</span> today."
      );
    });
  });
  suite("Translating to American English", () => {
    test("footie", () => {
      assert.equal(
        translator.translate(
          "We watched the footie match for a while.",
          "American"
        ),
        "We watched the <span class='highlight'>soccer</span> match for a while."
      );
    });
    test("Paracetamol", () => {
      assert.equal(
        translator.translate(
          "Paracetamol takes up to an hour to work.",
          "American"
        ),
        "<span class='highlight'>Tylenol</span> takes up to an hour to work."
      );
    });
    test("caramelise", () => {
      assert.equal(
        translator.translate("First, caramelise the onions.", "American"),
        "First, <span class='highlight'>caramelize</span> the onions."
      );
    });
    test("bank holiday, funfair", () => {
      assert.equal(
        translator.translate(
          "I spent the bank holiday at the funfair.",
          "American"
        ),
        "I spent the <span class='highlight'>public holiday</span> at the <span class='highlight'>carnival</span>."
      );
    });
    test("bicky, chippy", () => {
      assert.equal(
        translator.translate(
          "I had a bicky then went to the chippy.",
          "American"
        ),
        "I had a <span class='highlight'>cookie</span> then went to the <span class='highlight'>fish-and-chip shop</span>."
      );
    });
    test("bits and bobs, bum bag", () => {
      assert.equal(
        translator.translate(
          "I've just got bits and bobs in my bum bag.",
          "American"
        ),
        "I've just got <span class='highlight'>odds and ends</span> in my <span class='highlight'>fanny pack</span>."
      );
    });
    test("car boot sale", () => {
      assert.equal(
        translator.translate(
          "The car boot sale at Boxted Airfield was called off.",
          "American"
        ),
        "The <span class='highlight'>swap meet</span> at Boxted Airfield was called off."
      );
    });
    test("Mrs", () => {
      assert.equal(
        translator.translate("Have you met Mrs Kalyani?", "American"),
        "Have you met <span class='highlight'>Mrs.</span> Kalyani?"
      );
    });
    test("Prof", () => {
      assert.equal(
        translator.translate(
          "Prof Joyner of King's College, London.",
          "American"
        ),
        "<span class='highlight'>Prof.</span> Joyner of King's College, London."
      );
    });
    test("digital times", () => {
      assert.equal(
        translator.translate(
          "Tea time is usually around 4 or 4.30.",
          "American"
        ),
        "Tea time is usually around 4 or <span class='highlight'>4:30</span>."
      );
    });
  });
  suite("Verifying highlights", () => {
    /*
    NB. This additional section is completely redundant as it replicates four of the tests above; however, freeCodeCamp requires these tests in order to complete their challenge, and the only other approach would be to create a separate 'add/remove highlight' function which would only be useful in the specific case of these tests.
    */
    test("favorite", () => {
      assert.equal(
        translator.translate("Mangoes are my favorite fruit.", "British"),
        "Mangoes are my <span class='highlight'>favourite</span> fruit."
      );
    });
    test("yogurt", () => {
      assert.equal(
        translator.translate("I ate yogurt for breakfast.", "British"),
        "I ate <span class='highlight'>yoghurt</span> for breakfast."
      );
    });
    test("footie", () => {
      assert.equal(
        translator.translate(
          "We watched the footie match for a while.",
          "American"
        ),
        "We watched the <span class='highlight'>soccer</span> match for a while."
      );
    });
    test("Paracetamol", () => {
      assert.equal(
        translator.translate(
          "Paracetamol takes up to an hour to work.",
          "American"
        ),
        "<span class='highlight'>Tylenol</span> takes up to an hour to work."
      );
    });
  });
});
