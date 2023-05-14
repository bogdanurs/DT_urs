$(document).ready(function () {
  //click handler for the button
  $("#calculate").click(function () {
    let firstNumberText = $("#firstNumber").val();
    let secondNumberText = $("#secondNumber").val();

    let firstNumber = parseInt(firstNumberText);
    let secondNumber = parseInt(secondNumberText);

    //checking if the values are whole numbers
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
      $("#result").text("Invalid input");
      return;
    }

    //select the type of operation
    let operator = $('input[name="operator"]:checked').val();

    let result;
    switch (operator) {
      case "+":
        result = firstNumber + secondNumber;
        break;
      case "-":
        result = firstNumber - secondNumber;
        break;
      case "*":
        result = firstNumber * secondNumber;
        break;
      case "/":
        result = firstNumber / secondNumber;
        break;
      case "%":
        result = firstNumber % secondNumber;
        break;
      default:
        $("#result").text("Select an operator");
        return;
    }

    $("#result").text(result);
  });
});
