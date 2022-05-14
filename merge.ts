function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);

  const [head, ...tail] = intervals;
  const merged = [head];
  for (const [start, end] of tail) {
    const lastMergedEnd = merged[merged.length - 1][1];
    if (start <= lastMergedEnd)
      merged[merged.length - 1][1] = Math.max(lastMergedEnd, end);
    else merged.push([start, end]);
  }

  return merged;
}
