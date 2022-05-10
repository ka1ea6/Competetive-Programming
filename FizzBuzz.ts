function fizzBuzz(n: number): string[] {
  let stringArray: string[] = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) stringArray.push("FizzBuzz");
    else if (i % 5 === 0) stringArray.push("Buzz");
    else if (i % 3 === 0) stringArray.push("Fizz");
    else stringArray.push(i.toString());
  }
  return stringArray;
}
