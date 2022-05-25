class MinStack {
  arr!: number[];
  constructor() {
    this.arr = [];
  }

  push(val: number): void {
    this.arr.push(val);
  }

  pop(): void {
    this.arr.pop();
  }

  top(): number {
    return this.arr[this.arr.length - 1];
  }

  getMin(): number {
    let tempArr: number[] = [...this.arr];
    return tempArr.sort((a, b) => a - b)[0];
  }
}
