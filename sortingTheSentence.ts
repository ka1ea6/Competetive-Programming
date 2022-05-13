function sortSentence(s: string): string {
  let splitSentence: string[] = s.split(" ");

  splitSentence.sort(
    (a, b) => parseInt(a[a.length - 1]) - parseInt(b[b.length - 1])
  );

  const newSentence = splitSentence.map((el) => {
    let word: string[] = [];
    for (let i = 0; i < el.length - 1; i++) {
      word.push(el[i]);
    }
    return word.join("");
  });
  return newSentence.join(" ");
}
