function insertionSort1(n: number, arr: number[]): void {
  // Write your code here
  let temp!: number;
  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] < arr[i - 1] && !temp) {
      temp = arr[i];
      arr[i] = arr[i - 1];
      console.log(arr.join(" "));
    } else if (temp || temp === 0) {
      if (temp < arr[i - 1]) {
        arr[i] = arr[i - 1];
        console.log(arr.join(" "));
      }
      if (temp > arr[i]) {
        arr[i + 1] = temp;
        console.log(arr.join(" "));
        return;
      } else if (i === 0 && arr[i] > temp) {
        arr.shift();
        arr.unshift(temp);
        console.log(arr.join(" "));
      }
    }
  }
}
