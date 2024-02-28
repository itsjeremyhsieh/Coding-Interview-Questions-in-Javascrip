class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) { //hash function
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }
  set(key, value) {
    let hash = this._hash(key);
    if (!this.data[hash]) {
      this.data[hash] = [];
      this.data[hash].push([key, value]) 
    }
    else
      this.data[hash].push([key, value]) 
  }
  get(key) {
    let hash = this._hash(key);
    if (this.data[hash]) {
      for( let i = 0 ; i < this.data[hash].length ; i ++)
        if(this.data[hash][i][0] === key)
          return (this.data[hash][0][1])
    }
    else
      return undefined
  }

  keys() {
    let keyArray = [];
    for (let i = 0 ; i < this.data.length ; i ++) {
      if (this.data[i]) {
        keyArray.push(this.data[i][0][0])
      }
    }
    return keyArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
console.log(myHashTable.get('grapes')) 
myHashTable.set('apples', 9)
myHashTable.set('apples', 10)
console.log(myHashTable.get('apples')) 

console.log(myHashTable.keys());
