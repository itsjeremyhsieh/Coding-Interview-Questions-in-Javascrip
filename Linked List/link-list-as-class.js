// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class DoubleNode {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  class SingleLinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null
      };
      this.tail = this.head;
      this.length = 1;
    }
    append(value) {
      //Code here
      const newNode = new Node(value);
      this.tail.next = newNode;
      this.tail = newNode
      this.length += 1;
    }
    prepend(value) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      this.length += 1;
    }
    insert(index, value) {
      const newNode = new Node(value);
      let currentNode = this.head;
      if (index == 0)
        this.prepend(value)
      if (index >= this.length)
        this.append(value)
      else {
        for( let i = 0 ; i < index - 1 ; i ++) {
          currentNode = currentNode.next;
        }
        let after = currentNode.next;
        currentNode.next = newNode;
        newNode.next = after;
        this.length ++;
      }
      
    }
    remove(index) {
      let currentNode = this.head;
      if (index >= this.length)
        index = this.length - 1;
      if (index == 0)
        this.head = this.head.next;
      else {
        for( let i = 0 ; i < index - 1 ; i ++) {
        currentNode = currentNode.next;
      }
      currentNode.next = currentNode.next.next;
      }
      this.length --;
    }
    reverse(){
      if (this.length == 1) {
        return this.head;
      }
      let first = this.head;
      this.tail = this.head;
      let second = first.next;
      while (second) {
        let next = second.next;
        second.next = first;
        first = second;
        second = next;
      }
      this.head.next = null;
      this.head = first;
      return this;
    }
    
    printList() {
      const array = []
      let currentNode = this.head;
      let cnt = 0;
      while (cnt < this.length) {
        array.push(currentNode.value);
        currentNode = currentNode.next;
        cnt ++;
      }
      return array;
    }
  }
  
  class DoubleLinkedList {
    constructor(value) {
      this.head = {
        value: value,
        prev: null,
        next: null,
      };
      this.tail = this.head;
      this.length = 1;
    }
    append(value) {
      //Code here
      const newNode = new DoubleNode(value);
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode
      this.length += 1;
    }
    prepend(value) {
      const newNode = new DoubleNode(value);
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
      this.length += 1;
    }
    insert(index, value) {
      const newNode = new DoubleNode(value);
      let currentNode = this.head;
      if (index == 0)
        this.prepend(value)
      if (index >= this.length)
        this.append(value)
      else {
        for( let i = 0 ; i < index - 1 ; i ++) {
          currentNode = currentNode.next;
        }
        let after = currentNode.next;
        currentNode.next = newNode;
        newNode.prev = currentNode;
        newNode.next = after;
        after.prev = newNode;
        this.length ++;
      }
  
    }
    remove(index) {
      let currentNode = this.head;
      let last = false;
      if (index >= this.length - 1) {
        index = this.length - 1;
        last = true;
      }
      
      if (index == 0)
      {
        this.head = this.head.next;
        this.head.prev = null;
      }
      else if (last == false){
        for( let i = 0 ; i < index - 1 ; i ++) {
          currentNode = currentNode.next;
        }
        currentNode.next = currentNode.next.next;
        currentNode.next.prev = currentNode;
        currentNode.next.next = this.head;
      }
      else if (last == true) {
        for( let i = 0 ; i < index - 1 ; i ++) {
          currentNode = currentNode.next;
        }
        currentNode.next = this.head;
      }
      this.length --;
  
    }
    printList() {
      const array = []
      let currentNode = this.head;
      let cnt = 0;
      while (cnt < this.length) {
        array.push(currentNode.value);
        currentNode = currentNode.next;
        cnt ++;
      }
      return array;
    }
  }
  
  let myLinkedList = new DoubleLinkedList(10);
  myLinkedList.append(5);
  myLinkedList.append(16);
  
  // myLinkedList.prepend(20);
  myLinkedList.insert(1, 30);
  myLinkedList.remove(2);
  // console.log(myLinkedList);
  //  myLinkedList.reverse();
  console.log(myLinkedList.printList());
  //  myLinkedList.reverse();
  // console.log(myLinkedList);
