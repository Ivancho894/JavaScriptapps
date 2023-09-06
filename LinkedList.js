function LinkedList() {
    this.head = null;
  }
  
  function Node(value) {
    this.value = value;
    this.next = null;
  }
  LinkedList.prototype.add = function(value) { // 3
    let node = new Node(value);
    let current = this.head;
    // Node{value: 2, next: Node{value: 3, next: null}}
  
    if(current === null) this.head = node;
    // if(!current) this.head = node;
  
    else{
      while(current.next){ // null
        current = current.next;
      }
  
      current.next = node;
    }
  }/*

LinkedList.prototype.add = function(value){
    let node = new Node(value);
    let current = this.head
 
    if (!current){
        this.head = node;
        return node
    }else {

    while (current.next){
        current = current.next;
    }}
    current.next = node;
    return node
}  
*/
LinkedList.prototype.remove = function(element){
    let cur = this.head;
    let head = cur;
    if(cur.next==null){
      return null
    }
  
    while(cur.vale && cur.value!=element){
        head = cur;
        cur = this.next;
    }
    head.next = null
    return LinkedList
}
LinkedList.prototype.search = function(par){
    let encontro = false;
    let cur = this.head;
    if (typeof par == 'function'){
        while(!par(cur)){
            cur = this.next;
        }
    }else{
        while(!par==cur){
            cur = this.next;
        }
    }
    return cur.value==par || par(cur)?cur:null;
}
function igualADos(x){
    return x==2
}

let newList = new LinkedList();
newList.add(4);
newList.add(3);
newList.add(2);
newList.add(42);
console.log(newList);
newList.remove(3);
console.log(newList);
console.log(newList.search(2));
console.log(newList);
//newList.search(igualADos);

console.log(newList);