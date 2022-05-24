function checkArithmeticSubarrays(
  nums: number[],
  l: number[],
  r: number[]
): boolean[] {
  const answers: boolean[] = [];
  for (let i = 0; i < l.length; i++) {
    let currArr = [...nums].slice(l[i], r[i] + 1).sort((a, b) => a - b);
    console.log(currArr);
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
// console.log(checkArithmeticSubarrays([4, 6, 5, 9, 3, 7], [0, 0, 2], [2, 3, 5]));
console.log(
  checkArithmeticSubarrays(
    [-12, -9, -3, -12, -6, 15, 20, -25, -20, -15, -10],
    [0, 1, 6, 4, 8, 7],
    [4, 4, 9, 7, 9, 10]
  )
);
