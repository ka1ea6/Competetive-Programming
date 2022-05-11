function selectionSort(arr, n) {
  let leastIndex, temp;
  for (let i = 0; i < n - 1; i++) {
    leastIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[leastIndex]) leastIndex = j;
    }

    temp = arr[i];
    arr[i] = arr[leastIndex];
    arr[leastIndex] = temp;
  }
  return arr;
}
