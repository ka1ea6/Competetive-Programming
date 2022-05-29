function dailyTemperatures(temperatures: number[]): number[] {
  const answer: number[] = [];
  for (let i = 0; i < temperatures.length; i++) {
    let j = i;
    while (j < temperatures.length) {
      if (temperatures[i] < temperatures[j]) {
        answer.push(j - i);
        break;
      } else if (j === temperatures.length - 1) answer.push(0);
      j++;
    }
  }
  return answer;
}
