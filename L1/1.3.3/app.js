var counter = 0;

const inc = document.getElementById("inc");
inc.addEventListener("click", increment);

const decr = document.getElementById("decr");

let decrement = () => {
  if (counter > 0) {
    counter--;
  }
  printValue("counter", counter);
};

decr.addEventListener("click", decrement);

function printValue(divId, value) {
  document.getElementById(divId).innerHTML = value;
}
printValue("counter", 0);

function increment() {
  if (counter < 10) {
    counter++;
  }
  printValue("counter", counter);
}
