function countingValleys(steps: number, path: string): number {
  // Write your code here
  let valleys: number = 0;
  let altitude: number = 0;

  for (let i = 0; i < steps; i++) {
    if (path[i] === "D") {
      if (altitude === 0) valleys++;
      altitude--;
    }
    if (path[i] === "U") altitude++;
  }
  return valleys;
}
