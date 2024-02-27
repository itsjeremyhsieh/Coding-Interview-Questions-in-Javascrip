class MyArray {
  constructor() {
    this.length = 0
    this.data = {}
  }
  get(index) {
    return this.data[index]
  }
  push(item) {
    this.data[this.length] = item;
    this.length ++;
  }
  pop() {
    const last_item = this.data[this.length -1];
    delete this.data[this.length-1];
    this.length --;
    return last_item;
  }
  delete(index) {
    this.shift(index);
    delete this.data[this.length-1];
    this.length --;
  }

  shift(index) {
    for(let i = index ; i < this.length - 1; i ++) {
      this.data[i] = this.data[i+1]
    }
  }
}

const newArray = new MyArray();

newArray.push("hi");
newArray.push("you");
newArray.push("!");

newArray.delete(1);

newArray.pop();

console.log(newArray);
