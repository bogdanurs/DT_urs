function getFibonacci(n) {
  if (typeof n !== "number" || n < 1 || n > 10) {
    return "not allowed";
  }

  const fibonacci = [1, 1];

  for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  return fibonacci;
}
