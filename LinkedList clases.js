class LinkedList {
    constructor() {
        this.head = null;
    }
    add(value) {
        let node = new Node(value);
        let current = this.head;

        if (!current) {
            this.head = node;
            return node;
        }

        while (!current.next) {
            current = current.next;
        }
        current.next = node;
        return node;
    }
}
  
  class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
  



let newList = new LinkedList();
newList.add(4);