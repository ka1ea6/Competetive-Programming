function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  let ansArray: number[] = [];
  let maxNum: number = Math.max(...nums2);
  for (let i = 0; i < nums1.length; i++) {
    let curr: number = nums1[i];
    let currIndex: number = nums2.indexOf(curr);
    if (currIndex === nums2.length - 1 || curr === maxNum) {
      ansArray.push(-1);
      continue;
    }
    for (let j = currIndex; j < nums2.length; j++) {
      if (nums2[j + 1] > curr) {
        ansArray.push(nums2[j + 1]);
        break;
      } else if (j === nums2.length - 1) ansArray.push(-1);
    }
  }
  return ansArray;
}
