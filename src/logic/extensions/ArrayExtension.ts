declare global {
  interface Array<T> {
    /**
     * Get element(s) from the array  at random.
     * @param num number to get
     */
    atRandom(num: number): T[];

    /**
     * Get a copy of the shuffled array.
     */
    shuffle(): T[];
  }
}

Array.prototype.atRandom = function (num: number) {
  let list = [];

  if (this.length > 0) {
    for (let i = 0; i < num; i++) {
      list.push(this[Math.floor(Math.random() * this.length)]);
    }
  }

  return list;
}

Array.prototype.shuffle = function () {
  let list = this.slice();

  for (let i = list.length - 1; i > 0; i--) {
    let r = Math.floor(Math.random() * (i + 1));
    let tmp = list[i];
    list[i] = list[r];
    list[r] = tmp;
  }

  return list;
}

export { }
