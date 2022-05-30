function carFleet(target: number, position: number[], speed: number[]): number {
  let time: number[][] = [];
  let fleet: number = position.length;
  if (position.length === 1) return fleet;
  for (let i = 0; i < position.length; i++) {
    let timeToFinish: number = (target - position[i]) / speed[i];
    time.push([position[i], timeToFinish]);
  }
  time.sort((a, b) => b[0] - a[0]);
  //   console.log(time);
  for (let i = 0; i < time.length - 1; i++) {
    let j: number = i + 1;
    while (j < time.length && i < time.length - 1) {
      if (time[i][1] >= time[j][1]) {
        fleet--;
        j++;
      } else break;
    }
    i += j - (i + 1);
  }
  return fleet;
}
