export class Table {
  constructor() {
    this.table = {
      a: [],
      b: [],
      c: [],
      d: [],
      e: [],
      f: [],
      g: [],
      h: [],
      i: [],
      j: [],
      k: [],
      l: [],
      m: [],
      n: [],
      o: [],
      p: [],
      q: [],
      r: [],
      s: [],
      t: [],
      u: [],
      v: [],
      w: [],
      x: [],
      y: [],
      z: [],
    };
  }
  add(data) {
    let firstLetter = data.trim().toLowerCase()[0];

    if (firstLetter && this.table[firstLetter]) {
      this.table[firstLetter].push(data.trim());
    }
  }
  completed(word) {
    // console.log("la palabra : ", word);
    let newWord = word.trim().toLowerCase();
    let firstLetter = newWord[0];
    // console.log({ word: newWord, 1: firstLetter });

    let namesMatch = [];
    if (this.table[firstLetter]) {
      let names = this.table[firstLetter];
      let corte = 0;

      for (let i = 0; i < names.length; i++) {
        if (corte > 1000) break;
        if (namesMatch.length > 5) break;

        if (names[i].toLowerCase().startsWith(newWord)) {
          namesMatch.push(names[i]);
        }
        corte++;
      }
    }
    // console.log("paises que matchean: ", namesMatch.length);
    return namesMatch;
  }
}
