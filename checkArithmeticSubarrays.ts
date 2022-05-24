function checkArithmeticSubarrays(
  nums: number[],
  l: number[],
  r: number[]
): boolean[] {
  const answers: boolean[] = [];
  for (let i = 0; i < l.length; i++) {
    let currArr = [...nums].slice(l[i], r[i] + 1).sort((a, b) => a - b);
    if (currArr.length === 1) {
      answers.push(false);
      continue;
    }
    let step: number = currArr[1] - currArr[0];
    for (let j = 1; j < currArr.length; j++) {
      if (currArr[j] - currArr[j - 1] === step) {
        if (j === currArr.length - 1) answers.push(true);
        continue;
      } else {
        answers.push(false);
        break;
      }
    }
  }
  return answers;
}
