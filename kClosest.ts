function kClosest(points: number[][], k: number): number[][] {
  points.sort((a, b) => {
    return a[0] ** 2 + a[1] ** 2 - (b[0] ** 2 + b[1] ** 2);
  });
  points.length = k;
  return points;
}
