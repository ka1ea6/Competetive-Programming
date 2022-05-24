function maxCoins(piles: number[]): number {
  if (piles.length === 3) return piles.sort((a, b) => a - b)[1];
  let sum: number = 0;
  const sortedPile: number[] = [...piles].sort((a, b) => a - b);
  while (sortedPile.length) {
    let curPile = [];
    for (let i = 0; i < 2; i++) {
      curPile.push(sortedPile.pop());
      if (i === 0) curPile.push(sortedPile.shift());
    }
    curPile.sort((a, b) => a - b);
    sum += curPile[1];
  }
  return sum;
}
