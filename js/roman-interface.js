import { Roman } from './../js/roman.js';

$(document).ready(function() {
  $(".formOne").submit(function(event){
    event.preventDefault();
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let userInput = parseInt($(".number").val());
    console.log(userInput);
    let number = new Roman();
    let results = number.toRoman(userInput);
    $("#numbers").text(results.reduce(reducer));
  });
});
