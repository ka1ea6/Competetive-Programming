function countSwaps(a: number[]): void {
  // Write your code here
  let temp!: number;
  let numberOfSwaps: number = 0;
  for (let i = 1; i < a.length; i++) {
    for (let j = 0; j < i; j++) {
      if (a[i] < a[j]) {
        temp = a[i];
        a[i] = a[j];
        a[j] = temp;
        numberOfSwaps++;
      }
    }
  }
  console.log(`Array is sorted in ${numberOfSwaps} swaps.`);
  console.log(`First Element: ${a[0]}`);
  console.log(`Last Element: ${a[a.length - 1]}`);
}
