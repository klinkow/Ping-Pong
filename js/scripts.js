// Business logic:
var number;
var listOfNumbers = [];

function buildListOfNumbers(someNumber) {
  for(var i=1; i < someNumber; i+=1) {
    number-=1;
    listOfNumbers.push(number);
  };
};

function addPingPongs(someArray) {
  var total = someArray.length;
  for (z=total; z>0; z-=1) {
    if (((z+1)%3===0) && ((z+1)%5!=0)) {
      someArray.splice((total-(z+1)),1,"ping");
    } else if (((z+1)%5===0) && ((z+1)%3!=0)) {
      someArray.splice((total-(z+1)),1,"pong");
    } else if ((z+1)%15===0) {
      someArray.splice((total-(z+1)),1,"pingpong");
    }
  };
};


// User Interface logic:
$(document).ready(function() {
  $(".btn").click(function(event) {
    event.preventDefault();
    $("#display").children("li").remove();
    var inputtedNumber = parseInt($("#numberInput").val());
    number = inputtedNumber;
    listOfNumbers = [number];
    buildListOfNumbers(inputtedNumber);
    addPingPongs(listOfNumbers);
    listOfNumbers.forEach(function(element) {
      $("#display").append("<li>"+element+"</li>");
    });
    });
  });
