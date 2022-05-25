function minSetSize(arr: number[]): number {
  let tempArr: number[] = [];
  let sum: number = 0;
  let sets: number = 0;
  const occurances = arr.reduce((acc, curr) => {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
  }, {});
  tempArr = Object.values(occurances);
  tempArr.sort((a, b) => b - a);
  while (sum < arr.length / 2) {
    sum += tempArr[sets];
    sets++;
  }
  return sets;
}
