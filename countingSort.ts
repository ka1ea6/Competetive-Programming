function countingSort(arr: number[]): number[] {
  let countArr: number[] = Array.apply(null, Array(100)).map(() => 0);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 100) countArr[arr[i]]++;
  }
  return countArr;
}
