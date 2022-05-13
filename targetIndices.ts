function targetIndices(nums: number[], target: number): number[] {
  const indexArray: number[] = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) indexArray.push(i);
  }
  return indexArray;
}
