const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;
const server = require("../server.js");

chai.use(chaiHttp);

let Translator = require("../components/translator.js");

suite("Functional Tests", () => {
  suite("Valid POST requests to /api/translate", () => {
    test("Translation from American to British", (done) => {
      chai
        .request(server)
        .keepOpen()
        .post("/api/translate")
        .send({
          text: "Let's go to the swap meet with Mrs. Smith at 2:30.",
          locale: "american-to-british",
        })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.deepEqual(res.body, {
            text: "Let's go to the swap meet with Mrs. Smith at 2:30.",
            translation:
              "Let's go to the <span class='highlight'>car boot sale</span> with <span class='highlight'>Mrs</span> Smith at <span class='highlight'>2.30</span>.",
          });
          done();
        });
    });
    test("Translation from British to American", (done) => {
      chai
        .request(server)
        .keepOpen()
        .post("/api/translate")
        .send({
          text: "Boiled sweets are my favourites!",
          locale: "british-to-american",
        })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.deepEqual(res.body, {
            text: "Boiled sweets are my favourites!",
            translation:
              "<span class='highlight'>Hard candies</span> are my <span class='highlight'>favorites</span>!",
          });
          done();
        });
    });
    test("Text that needs no translation", (done) => {
      chai
        .request(server)
        .keepOpen()
        .post("/api/translate")
        .send({ text: "Time to go home!", locale: "british-to-american" })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.deepEqual(res.body, {
            text: "Time to go home!",
            translation: "Everything looks good to me!",
          });
          done();
        });
    });
  });
  suite("Invalid POST requests to /api/translate", () => {
    test("Invalid locale field", (done) => {
      chai
        .request(server)
        .keepOpen()
        .post("/api/translate")
        .send({ text: "Translate this please!", locale: "british-to-french" })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.deepEqual(res.body, {
            error: "Invalid value for locale field",
          });
          done();
        });
    });
    test("Missing text field", (done) => {
      chai
        .request(server)
        .keepOpen()
        .post("/api/translate")
        .send({ locale: "british-to-american" })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.deepEqual(res.body, { error: "Required field(s) missing" });
          done();
        });
    });
    test("Missing locale field", (done) => {
      chai
        .request(server)
        .keepOpen()
        .post("/api/translate")
        .send({ text: "Please translate my sentence" })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.deepEqual(res.body, { error: "Required field(s) missing" });
          done();
        });
    });
    test("Empty text", (done) => {
      chai
        .request(server)
        .keepOpen()
        .post("/api/translate")
        .send({ text: "", locale: "american-to-british" })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.deepEqual(res.body, { error: "No text to translate" });
          done();
        });
    });
  });
});
