class MyCircularDeque {
  deQueue!: number[];
  deQueueLimit!: number;
  constructor(k: number) {
    this.deQueue = [];
    this.deQueueLimit = k;
  }

  insertFront(value: number): boolean {
    if (this.deQueue.length >= this.deQueueLimit) return false;
    this.deQueue.unshift(value);
    return true;
  }

  insertLast(value: number): boolean {
    if (this.deQueue.length >= this.deQueueLimit) return false;
    this.deQueue.push(value);
    return true;
  }

  deleteFront(): boolean {
    if (this.deQueue.length < 1) return false;
    this.deQueue.shift();
    return true;
  }

  deleteLast(): boolean {
    if (this.deQueue.length < 1) return false;
    this.deQueue.pop();
    return true;
  }

  getFront(): number {
    if (this.deQueue.length < 1) return -1;
    return this.deQueue[0];
  }

  getRear(): number {
    if (this.deQueue.length < 1) return -1;
    return this.deQueue[this.deQueue.length - 1];
  }

  isEmpty(): boolean {
    if (this.deQueue.length < 1) return true;
    return false;
  }

  isFull(): boolean {
    if (this.deQueue.length === this.deQueueLimit) return true;
    return false;
  }
}
