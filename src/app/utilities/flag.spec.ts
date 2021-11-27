import {getFlag} from "./flag";
describe("Testing flag utility", function() {
  it('getFlag()', function() {
    const expectedFlags: string[] = ["assets/flags/us.png", "assets/flags/hu.png", "assets/flags/fj.png"];
    const currencies: string[] = ["usd", "huf", "fjd"];
    const flags: string[] = [];

    for (let currency of currencies) {
      flags.push(getFlag(currency));
    }

    expect(flags).toEqual(expectedFlags)
  });
});
