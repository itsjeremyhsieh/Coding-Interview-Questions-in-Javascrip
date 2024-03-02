class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        let newNode = new Node(value);
        if(this.length == 0){
            this.bottom = newNode;
            this.top = newNode;
        }
        else {
            const top = this.top;
            this.top = newNode;
            this.top.next = top; // point back to previous
            
        }
        this.length ++;
    }

    pop() {
        if(!this.top)
            return null
        if(this.length == 1) {
            this.bottom = null;
            this.length --;
        }
        let first = this.top;
        this.top = this.top.next; //2nd item
        this.length --;
        return first;
    }

    //isEmpty
}

const myStack = new Stack();
myStack.push(1);
myStack.push(3);
myStack.push(5);
console.log(myStack.pop())
console.log(myStack.pop())
// myStack.push(7);
console.log(myStack)
