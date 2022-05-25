function evalRPN(tokens: string[]): number {
  if (tokens.length === 1) return Number(tokens[0]);

  const tokenAny: any[] = [...tokens];
  let negative: boolean = false;
  let value: number = 0;
  let i: number = 0;
  while (tokenAny.length > 2) {
    negative = false;
    switch (tokenAny[i]) {
      case "+":
        value = Math.floor(Number(tokenAny[i - 2]) + Number(tokenAny[i - 1]));
        tokenAny[i] = value;
        tokenAny.splice(i - 2, 2);
        i = 0;
        break;
      case "-":
        value = Math.floor(Number(tokenAny[i - 2]) - Number(tokenAny[i - 1]));
        tokenAny[i] = value;
        tokenAny.splice(i - 2, 2);
        i = 0;
        break;
      case "*":
        if (
          (Number(tokenAny[i - 2]) < 0 || Number(tokenAny[i - 1] < 0)) &&
          !(Number(tokenAny[i - 2]) < 0 && Number(tokenAny[i - 1]) < 0)
        )
          negative = true;
        value = Math.floor(
          Math.abs(Number(tokenAny[i - 2])) * Math.abs(Number(tokenAny[i - 1]))
        );
        value = negative ? value * -1 : value;
        tokenAny[i] = value;
        tokenAny.splice(i - 2, 2);
        i = 0;
        break;
      case "/":
        if (
          (Number(tokenAny[i - 2]) < 0 || Number(tokenAny[i - 1] < 0)) &&
          !(Number(tokenAny[i - 2]) < 0 && Number(tokenAny[i - 1]) < 0)
        )
          negative = true;
        value = Math.floor(
          Math.abs(Number(tokenAny[i - 2])) / Math.abs(Number(tokenAny[i - 1]))
        );
        value = negative ? value * -1 : value;
        tokenAny[i] = value;
        tokenAny.splice(i - 2, 2);
        i = 0;
        break;
      default:
        break;
    }
    i++;
  }
  return value;
}
