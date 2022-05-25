function pancakeSort(arr: number[]): number[] {
  let reqFlips: number = arr.length;
  let k: number[] = [];
  while (reqFlips) {
    let currArr: number[] = arr.slice(0, reqFlips);
    k.push(currArr.indexOf(Math.max(...currArr)) + 1);
    k.push(currArr.length);
    flip(arr, currArr.indexOf(Math.max(...currArr)) + 1);
    flip(arr, currArr.length);
    reqFlips--;
  }
  return k;
}
function flip(arr: number[], k: number): number[] {
  let i: number = 0;
  let temp: number = 0;
  while (i < Math.floor(k / 2)) {
    temp = arr[i];
    arr[i] = arr[k - i - 1];
    arr[k - i - 1] = temp;
    i++;
  }
  return arr;
}
