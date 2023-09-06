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
  }
  
  
  LinkedList.prototype.remove = function() {
    let current = this.head;
    // Node{value: 1, next: null}
  
    if(!current) return null;
  
    else if(!current.next){ // current.next === null
      let aux = this.head.value; // 7
      this.head = null;
      return aux;
    }
  
    while(current.next.next){ // null
      current = current.next;
    }
  
    let value = current.next.value; // 
    current.next = null;
    return value;
  }
  
  
  LinkedList.prototype.search = function(arg) { // 
    let current = this.head;
  
    while(current){ // current !== null
      if(typeof arg === 'function'){
        if(arg(current.value)) return current.value;
      }
      if(current.value === arg) return arg;
  
      current = current.next;
    }
  
    return null;
  }
  
  
  let newList = new LinkedList();
  newList.add(4);
  newList.add(3);
  newList.add(2);
  newList.add(42);
  console.log(newList);
  newList.remove();
  newList.remove();
//   console.log(newList);
  console.log(newList.search(2));
//   console.log(newList);
  //newList.search(igualADos);
  
  console.log(newList);  