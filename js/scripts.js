$(document).ready(function() {
  $(".btn").click(function(event) {
    event.preventDefault();
    $("#display").children("li").remove();
    var inputtedNumber = $("#numberInput").val();
    var inputtedNumber = parseInt(inputtedNumber);
    var number = inputtedNumber;
    var listOfNumbers = [inputtedNumber];

    for(var i=1; i < inputtedNumber; i+=1) {
      number-=1;
      listOfNumbers.push(number);
    };

    for(var z=1; z<=inputtedNumber; z+=1) {
      if ((z%3===0) && (z%5!=0)) {
        $("#display").append("<li>ping</li>");
      } else if ((z%5===0) && (z%3!=0)) {
        $("#display").append("<li>pong</li>");
      } else if (z%15===0) {
        $("#display").append("<li>pingpong</li>");
      } else {
        $("#display").append("<li>"+ z +"</li>");
      }
    };

  });


});
