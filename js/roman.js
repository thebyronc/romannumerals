export class Roman {
  constructor() {}
  toRoman(userInput) {

    let output = [];
    for (let numI = 0; numI < userInput; numI++) {
      output.push("I");
    }
    console.log("initial output: " + output);
    // debugger;
    for (let index = 0; index < output.length; index++) {
      if (output.slice(index, index+1000).join('').match(/I{1000}/i)) {
        output.splice(index, 1000, "M");
      } else if (output.slice(index, index+900).join('').match(/I{900}/i)) {
        output.splice(index, 900, "CM");
      } else if (output.slice(index, index+500).join('').match(/I{500}/i)) {
        output.splice(index, 500, "D");
      } else if (output.slice(index, index+400).join('').match(/I{400}/i)) {
        output.splice(index, 400, "CD");
      } else if (output.slice(index, index+100).join('').match(/I{100}/i)) {
        output.splice(index, 100, "C");
      } else if (output.slice(index, index+90).join('').match(/I{90}/i)) {
        output.splice(index, 90, "XC");
      } else if (output.slice(index, index+50).join('').match(/I{50}/i)) {
        output.splice(index, 50, "L");
      } else if (output.slice(index, index+10).join('').match(/I{10}/i)) {
        output.splice(index, 10, "X");
      } else if (output.slice(index, index+9).join('').match(/I{9}/i)) {
        output.splice(index, 9, "IX");
      } else if (output.slice(index, index+5).join('').match(/I{5}/i)) {
        output.splice(index, 5, "V");
      } else if (output.slice(index, index+4).join('').match(/I{4}/i)) {
        output.splice(index, 4, "IV");
      } else {
        console.log("loop: " + output.length);
      }
    }
    return output;
  }
}
