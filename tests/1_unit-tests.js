const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
const translator = new Translator();

suite("Unit Tests", () => {
  suite("Translating to British English", () => {
    test("favorite", () => {
      assert.include(
        translator.translate("Mangoes are my favorite fruit.", "British"),
        "favourite"
      );
      assert.notInclude(
        translator.translate("Mangoes are my favorite fruit.", "British"),
        "favorite"
      );
    });
    test("yogurt", () => {
      assert.include(
        translator.translate("I ate yogurt for breakfast.", "British"),
        "yoghurt"
      );
      assert.notInclude(
        translator.translate("I ate yogurt for breakfast.", "British"),
        "yogurt"
      );
    });
    test("condo", () => {
      assert.include(
        translator.translate("We had a party at my friend's condo.", "British"),
        "flat"
      );
      assert.notInclude(
        translator.translate("We had a party at my friend's condo.", "British"),
        "condo"
      );
    });
    test("trashcan", () => {
      assert.include(
        translator.translate(
          "Can you toss this in the trashcan for me?",
          "British"
        ),
        "bin"
      );
      assert.notInclude(
        translator.translate(
          "Can you toss this in the trashcan for me?",
          "British"
        ),
        "trashcan"
      );
    });
    test("parking lot", () => {
      assert.include(
        translator.translate("The parking lot was full.", "British"),
        "car park"
      );
      assert.notInclude(
        translator.translate("The parking lot was full.", "British"),
        "parking lot"
      );
    });
    test.skip("Rube Goldberg machine", () => {
      assert.include(
        translator.translate(
          "Like a high tech Rube Goldberg machine.",
          "British"
        ),
        "Heath Robinson device"
      );
      assert.notInclude(
        translator.translate(
          "Like a high tech Rube Goldberg machine.",
          "British"
        ),
        "Rube Goldberg machine"
      );
    });
    test.skip("play hooky", () => {
      assert.include(
        translator.translate(
          "To play hooky means to skip class or work.",
          "British"
        ),
        "bunk off"
      );
      assert.notInclude(
        translator.translate(
          "To play hooky means to skip class or work.",
          "British"
        ),
        "play hooky"
      );
    });
    test.skip("Mr.", () => {
      assert.notInclude(
        translator.translate("No Mr. Bond, I expect you to die.", "British"),
        "Mr."
      );
    });
    test.skip("Dr.", () => {
      assert.notInclude(
        translator.translate("Dr. Grosh will see you now.", "British"),
        "Dr."
      );
    });
    test.skip("digital times", () => {
      assert.include(
        translator.translate("Lunch is at 12:15 today.", "British"),
        "12.15"
      );
      assert.notInclude(
        translator.translate("Lunch is at 12:15 today.", "British"),
        "12:15"
      );
    });
  });
  suite("Translating to American English", () => {
    test.skip("footie", () => {
      assert.include(
        translator.translate(
          "We watched the footie match for a while.",
          "American"
        ),
        "soccer"
      );
      assert.notInclude(
        translator.translate(
          "We watched the footie match for a while.",
          "American"
        ),
        "footie"
      );
    });
    test.skip("Paracetamol", () => {
      assert.include(
        translator.translate(
          "Paracetamol takes up to an hour to work.",
          "American"
        ),
        "Tylenol"
      );
      assert.notInclude(
        translator.translate(
          "Paracetamol takes up to an hour to work.",
          "American"
        ),
        "Paracetamol"
      );
    });
    test.skip("caramelise", () => {
      assert.include(
        translator.translate("First, caramelise the onions.", "American"),
        "caramelize"
      );
      assert.notInclude(
        translator.translate("First, caramelise the onions.", "American"),
        "caramelise"
      );
    });
    test.skip("bank holiday, funfair", () => {
      assert.include(
        translator.translate(
          "I spent the bank holiday at the funfair.",
          "American"
        ),
        "public holiday"
      );
      assert.include(
        translator.translate(
          "I spent the bank holiday at the funfair.",
          "American"
        ),
        "carnival"
      );
      assert.notInclude(
        translator.translate(
          "I spent the bank holiday at the funfair.",
          "American"
        ),
        "bank holiday"
      );
      assert.notInclude(
        translator.translate(
          "I spent the bank holiday at the funfair.",
          "American"
        ),
        "funfair"
      );
    });
    test.skip("bicky, chippy", () => {
      assert.include(
        translator.translate(
          "I had a bicky then went to the chippy.",
          "American"
        ),
        "cookie"
      );
      assert.include(
        translator.translate(
          "I had a bicky then went to the chippy.",
          "American"
        ),
        "fish-and-chip shop"
      );
      assert.notInclude(
        translator.translate(
          "I had a bicky then went to the chippy.",
          "American"
        ),
        "bicky"
      );
      assert.notInclude(
        translator.translate(
          "I had a bicky then went to the chippy.",
          "American"
        ),
        "chippy"
      );
    });
    test.skip("bits and bobs, bum bag", () => {
      assert.include(
        translator.translate(
          "I've just got bits and bobs in my bum bag.",
          "American"
        ),
        "odds and ends"
      );
      assert.include(
        translator.translate(
          "I've just got bits and bobs in my bum bag.",
          "American"
        ),
        "fanny pack"
      );
      assert.notInclude(
        translator.translate(
          "I've just got bits and bobs in my bum bag.",
          "American"
        ),
        "bits and bobs"
      );
      assert.notInclude(
        translator.translate(
          "I've just got bits and bobs in my bum bag.",
          "American"
        ),
        "bum bag"
      );
    });
    test.skip("car boot sale", () => {
      assert.include(
        translator.translate(
          "The car boot sale at Boxted Airfield was called off.",
          "American"
        ),
        "swap meet"
      );
      assert.notInclude(
        translator.translate(
          "The car boot sale at Boxted Airfield was called off.",
          "American"
        ),
        "car boot sale"
      );
    });
    test.skip("Mrs", () => {
      assert.include(
        translator.translate("Have you met Mrs Kalyani?", "American"),
        "Mrs."
      );
    });
    test.skip("Prof", () => {
      assert.include(
        translator.translate(
          "Prof Joyner of King's College, London.",
          "American"
        ),
        "Prof."
      );
    });
    test.skip("digital times", () => {
      assert.include(
        translator.translate(
          "Tea time is usually around 4 or 4.30.",
          "American"
        ),
        "4:30"
      );
      assert.notInclude(
        translator.translate(
          "Tea time is usually around 4 or 4.30.",
          "American"
        ),
        "4.30"
      );
    });
  });
  suite.skip("Verifying highlights", () => {
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
