const { expect } = require("chai");
const request = require("supertest");
const app = require("../server");

describe("Server", () => {
  it("should serve index.html on / route", (done) => {
    request(app)
      .get("/")
      .expect(200)
      .expect("Content-Type", "text/html; charset=UTF-8")
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.include("<html>");
        expect(res.text).to.include("<title>Text Transformer App | Home</title>");
        done();
      });
  });
});
