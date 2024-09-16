const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
const translator = new Translator();

suite("Unit Tests", () => {
  suite("Translating to British English", () => {
    test("favorite", () => {
      assert.include(
        translator.translate(
          "Mangoes are my favorite fruit.",
          "american-to-british"
        ),
        "favourite"
      );
      assert.notInclude(
        translator.translate(
          "Mangoes are my favorite fruit.",
          "american-to-british"
        ),
        "favorite"
      );
    });
    test("yogurt", () => {
      assert.include(
        translator.translate(
          "I ate yogurt for breakfast.",
          "american-to-british"
        ),
        "yoghurt"
      );
      assert.notInclude(
        translator.translate(
          "I ate yogurt for breakfast.",
          "american-to-british"
        ),
        "yogurt"
      );
    });
    test("condo", () => {
      assert.include(
        translator.translate(
          "We had a party at my friend's condo.",
          "american-to-british"
        ),
        "flat"
      );
      assert.notInclude(
        translator.translate(
          "We had a party at my friend's condo.",
          "american-to-british"
        ),
        "condo"
      );
    });
    test("trashcan", () => {
      assert.include(
        translator.translate(
          "Can you toss this in the trashcan for me?",
          "american-to-british"
        ),
        "bin"
      );
      assert.notInclude(
        translator.translate(
          "Can you toss this in the trashcan for me?",
          "american-to-british"
        ),
        "trashcan"
      );
    });
    test("parking lot", () => {
      assert.include(
        translator.translate(
          "The parking lot was full.",
          "american-to-british"
        ),
        "car park"
      );
      assert.notInclude(
        translator.translate(
          "The parking lot was full.",
          "american-to-british"
        ),
        "parking lot"
      );
    });
    test("Rube Goldberg machine", () => {
      assert.include(
        translator.translate(
          "Like a high tech Rube Goldberg machine.",
          "american-to-british"
        ),
        "Heath Robinson device"
      );
      assert.notInclude(
        translator.translate(
          "Like a high tech Rube Goldberg machine.",
          "american-to-british"
        ),
        "Rube Goldberg machine"
      );
    });
    test("play hooky", () => {
      assert.include(
        translator.translate(
          "To play hooky means to skip class or work.",
          "american-to-british"
        ),
        "bunk off"
      );
      assert.notInclude(
        translator.translate(
          "To play hooky means to skip class or work.",
          "american-to-british"
        ),
        "play hooky"
      );
    });
    test("Mr.", () => {
      assert.notInclude(
        translator.translate(
          "No Mr. Bond, I expect you to die.",
          "american-to-british"
        ),
        "Mr."
      );
    });
    test("Dr.", () => {
      assert.notInclude(
        translator.translate(
          "Dr. Grosh will see you now.",
          "american-to-british"
        ),
        "Dr."
      );
    });
    test("digital times", () => {
      assert.include(
        translator.translate("Lunch is at 12:15 today.", "american-to-british"),
        "12.15"
      );
      assert.notInclude(
        translator.translate("Lunch is at 12:15 today.", "american-to-british"),
        "12:15"
      );
    });
  });
  suite("Translating to American English", () => {
    test("footie", () => {
      assert.include(
        translator.translate(
          "We watched the footie match for a while.",
          "british-to-american"
        ),
        "soccer"
      );
      assert.notInclude(
        translator.translate(
          "We watched the footie match for a while.",
          "british-to-american"
        ),
        "footie"
      );
    });
    test("Paracetamol", () => {
      assert.include(
        translator.translate(
          "Paracetamol takes up to an hour to work.",
          "british-to-american"
        ),
        "Tylenol"
      );
      assert.notInclude(
        translator.translate(
          "Paracetamol takes up to an hour to work.",
          "british-to-american"
        ),
        "Paracetamol"
      );
    });
    test("caramelise", () => {
      assert.include(
        translator.translate(
          "First, caramelise the onions.",
          "british-to-american"
        ),
        "caramelize"
      );
      assert.notInclude(
        translator.translate(
          "First, caramelise the onions.",
          "british-to-american"
        ),
        "caramelise"
      );
    });
    test("bank holiday, funfair", () => {
      assert.include(
        translator.translate(
          "I spent the bank holiday at the funfair.",
          "british-to-american"
        ),
        "public holiday"
      );
      assert.include(
        translator.translate(
          "I spent the bank holiday at the funfair.",
          "british-to-american"
        ),
        "carnival"
      );
      assert.notInclude(
        translator.translate(
          "I spent the bank holiday at the funfair.",
          "british-to-american"
        ),
        "bank holiday"
      );
      assert.notInclude(
        translator.translate(
          "I spent the bank holiday at the funfair.",
          "british-to-american"
        ),
        "funfair"
      );
    });
    test("bicky, chippy", () => {
      assert.include(
        translator.translate(
          "I had a bicky then went to the chippy.",
          "british-to-american"
        ),
        "cookie"
      );
      assert.include(
        translator.translate(
          "I had a bicky then went to the chippy.",
          "british-to-american"
        ),
        "fish-and-chip shop"
      );
      assert.notInclude(
        translator.translate(
          "I had a bicky then went to the chippy.",
          "british-to-american"
        ),
        "bicky"
      );
      assert.notInclude(
        translator.translate(
          "I had a bicky then went to the chippy.",
          "british-to-american"
        ),
        "chippy"
      );
    });
    test("bits and bobs, bum bag", () => {
      assert.include(
        translator.translate(
          "I've just got bits and bobs in my bum bag.",
          "british-to-american"
        ),
        "odds and ends"
      );
      assert.include(
        translator.translate(
          "I've just got bits and bobs in my bum bag.",
          "british-to-american"
        ),
        "fanny pack"
      );
      assert.notInclude(
        translator.translate(
          "I've just got bits and bobs in my bum bag.",
          "british-to-american"
        ),
        "bits and bobs"
      );
      assert.notInclude(
        translator.translate(
          "I've just got bits and bobs in my bum bag.",
          "british-to-american"
        ),
        "bum bag"
      );
    });
    test("car boot sale", () => {
      assert.include(
        translator.translate(
          "The car boot sale at Boxted Airfield was called off.",
          "british-to-american"
        ),
        "swap meet"
      );
      assert.notInclude(
        translator.translate(
          "The car boot sale at Boxted Airfield was called off.",
          "british-to-american"
        ),
        "car boot sale"
      );
    });
    test("Mrs", () => {
      assert.include(
        translator.translate(
          "Have you met Mrs Kalyani?",
          "british-to-american"
        ),
        "Mrs."
      );
    });
    test("Prof", () => {
      assert.include(
        translator.translate(
          "Prof Joyner of King's College, London.",
          "british-to-american"
        ),
        "Prof."
      );
    });
    test("digital times", () => {
      assert.include(
        translator.translate(
          "Tea time is usually around 4 or 4.30.",
          "british-to-american"
        ),
        "4:30"
      );
      assert.notInclude(
        translator.translate(
          "Tea time is usually around 4 or 4.30.",
          "british-to-american"
        ),
        "4.30"
      );
    });
  });
  suite("Verifying highlights", () => {
    test("favorite", () => {
      assert.equal(
        translator.translate(
          "Mangoes are my favorite fruit.",
          "american-to-british"
        ),
        'Mangoes are my <span class="highlight">favourite</span> fruit.'
      );
    });
    test("yogurt", () => {
      assert.equal(
        translator.translate(
          "I ate yogurt for breakfast.",
          "american-to-british"
        ),
        'I ate <span class="highlight">yoghurt</span> for breakfast.'
      );
    });
    test("footie", () => {
      assert.equal(
        translator.translate(
          "We watched the footie match for a while.",
          "british-to-american"
        ),
        'We watched the <span class="highlight">soccer</span> match for a while.'
      );
    });
    test("Paracetamol", () => {
      assert.equal(
        translator.translate(
          "Paracetamol takes up to an hour to work.",
          "british-to-american"
        ),
        '<span class="highlight">Tylenol</span> takes up to an hour to work.'
      );
    });
  });
});
