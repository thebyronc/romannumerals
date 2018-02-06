import { Roman } from './../js/roman.js';

describe('Roman', function() {

  it('if 4 returns roman IV', function() {
    var number = new Roman();
    expect(number.toRoman(4)).toEqual(["IV"]);
  });
});
