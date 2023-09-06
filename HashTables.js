function HashTable() {
    this.array = [];
    this.numBuckets = 35;
  }
HashTable.prototype.hash = function(key){
    let hash = 0;

    for (let i = 0; i< key.length;i++){
        hash += key.charCodeAt();
    }

    return hash % this.numBuckets
}

HashTable.prototype.set = function(key,value){
    if (typeof key !== 'string') throw TypeError ('Keys must be strings')

    let index = this.hash(key)

    if (!this.array[index]){
        this.array[index] = {}
    }

    this.array[index][key] = value

}

HashTable.prototype.get = function(key){
    let pos = this.array[this.hash(key)]
  return pos?pos[key]:null;
  }
  HashTable.prototype.hasKey = function(key){
    return !!this.get(key)
  }


var laTabla = new HashTable();

laTabla.set('Ivan',42)
laTabla.set('Ivadn',42)
laTabla.set('Ivandd',42)
laTabla.set('Ivanq',42)
console.log(laTabla)
console.log(laTabla.get('Ivan'))
console.log(laTabla.hasKey('Idvan'))