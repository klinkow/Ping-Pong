var inputtedNumber = $("#numberInput").val;



$(document).ready(function() {
  $("#btn").click(function(event) {
    event.preventDefault();
    var number = inputtedNumber;
    var listOfNumbers = [inputtedNumber];

    console.log(1)

    for(var i=1; i < inputtedNumber; i+=1) {
      number -= 1;
      listOfNumbers.add(number);
    };

    listOfNumbers.foreach(function(listOfNumber) {
      if ((listOfNumber%3==0) && (listOfNumber%5!=0)) {
        listOfNumber="ping";
      } else if (listOfNumber%5==0 && listOfNumber%3!=0) {
        listOfNumber="pong";
      } else if (listOfNumber%15==0) {
        listOfNumber="pingpong";
      }
    });

    listOfNumbers.foreach(function(listOfNumber) {
      $("#display").append("<li>" + listOfNumber + "</li>");
    });
  });


});
