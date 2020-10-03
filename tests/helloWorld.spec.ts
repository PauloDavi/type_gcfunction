// import your functions to test
import { helloWorld } from "../src/index";

const res = {
  send: function (text) {
    return text;
  },
};

// Your first test
describe("First test", () => {
  it("should be able to return Hello World!", () => {
    expect(helloWorld(null, res)).toBe("Hello World!");
  });
});
