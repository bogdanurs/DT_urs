function test() {
  console.log(sum(0) == 0 ? "Passed" : "Failed");
  console.log(sum(2) == 3 ? "Passed" : "Failed");
  console.log(sum(4) == 10 ? "Passed" : "Failed");
  console.log(sum() == "n is undefined" ? "Passed" : "Failed");
}
test();

function test2() {
  console.log(sum(0) == 0 ? "Passed" : "Failed");
  console.log(sum(2) == 3 ? "Passed" : "Failed");
  console.log(sum(4) == 10 ? "Passed" : "Failed");
  console.log(sum() == "invalid argument" ? "Passed" : "Failed");
  console.log(sum("ugr") == "undefined" ? "Passed" : "Failed");
  console.log(sum(true) == "invalid argument" ? "Passed" : "Failed");
  console.log(sum(false) == "invalid argument" ? "Passed" : "Failed");
}

console.log("reapelare test");
test();
test2();
