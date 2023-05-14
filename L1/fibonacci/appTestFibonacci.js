function testFibonacci() {
  console.log(
    getFibonacci(2).toString() == [1, 1].toString() ? "Passed" : "Failed"
  );
  console.log(
    getFibonacci(5).toString() == [1, 1, 2, 3, 5].toString()
      ? "Passed"
      : "Failed"
  );
  console.log(getFibonacci().toString() == "not allowed" ? "Passed" : "Failed");
  console.log(
    getFibonacci(-1).toString() == "not allowed" ? "Passed" : "Failed"
  );
  console.log(
    getFibonacci(11).toString() == "not allowed" ? "Passed" : "Failed"
  );
  console.log(
    getFibonacci("foo").toString() == "not allowed" ? "Passed" : "Failed"
  );
  console.log(
    getFibonacci(undefined).toString() == "not allowed" ? "Passed" : "Failed"
  );
}
