function maxOperations(nums: number[], k: number): number {
  let operations: number = 0;
  for (let i = 0; i < nums.length; i++) {
    let opposer!: number | null;
    let j: number = 0;
    while (!opposer) {
      opposer =
        nums.indexOf(k - nums[j]) === j
          ? null
          : nums[nums.indexOf(k - nums[j])];
      if (j <= nums.length) j++;
      if (j > nums.length) break;
    }
    nums.splice(i, 1);
    if (opposer) {
      operations++;
      nums.splice(opposer, 1);
    }
  }
  return operations;
}
console.log(maxOperations([1, 2, 3, 4], 5));
// console.log(maxOperations([3, 1, 3, 4, 3], 6));
