var inputtedNumber = #numberInput.val;



$(document).ready(function() {
  $(button).click(function(event)) {
    var number = inputtedNumber;
    var array = [inputtedNumber];
    for(i=1, i<inputtedNumber, i+=1) {
      number -= 1;
      array.append(number);
    }

    array.foreach {
      if(val%3=0 && val%5~=0) {
        val="ping";
      } else if(val%5=0 && val%3~=0) {
        val="pong";
      } else if(val%15) {
        val="pingpong";
      }
    }

    array.forforeach {
      $(#display)append("<li>"+ val +"</li>")
    }
  }


})
