const { cursorTo } = require("readline");

function LinkedList() {
    this.head = null;
  }
  
  function Node(value) {
    this.value = value;
    this.next = null;
  }
  
LinkedList.prototype.add = function(value){
    let node = new Node(value);
    let current = this.head
 
    if (!current){
        this.head = node;
        return node
    }

    while (current.next){
        current = current.next;
    }
    current.next = node;
    return node
}  

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
    let cur = this.head;
    while(!cur && (cur.value!=par && par(cur))){
        cur = this.next;
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
newList.remove(3);
newList.search(2);
newList.search(igualADos);

console.log(newList);