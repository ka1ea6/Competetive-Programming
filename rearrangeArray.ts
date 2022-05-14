function rearrangeArray(nums: number[]): number[] {
  let temp!: number;
  for (let i = 0; i < nums.length; i++) {
    if ((nums[i - 1] + nums[i + 1]) / 2 === nums[i]) {
      temp = nums[i + 1];
      nums[i + 1] = nums[i];
      nums[i] = temp;
      i -= 2;
    }
  }
  return nums;
}
