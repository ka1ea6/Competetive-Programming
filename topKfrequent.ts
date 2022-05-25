function topKFrequent(nums: number[], k: number): number[] {
  const occurances = nums.reduce((acc, curr) => {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
  }, {});
  let sortArray = [];
  for (let freq of Object.keys(occurances)) {
    sortArray.push([freq, occurances[freq]]);
  }
  sortArray.sort((a, b) => b[1] - a[1]);
  return sortArray.slice(0, k).map((el) => Number(el[0]));
}
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
