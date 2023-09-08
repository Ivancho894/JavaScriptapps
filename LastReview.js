function LinkedList(){
    this.head = null;
}
function Node(value){
    this.value = value;
    this.next = null;
}

LinkedList.prototype.add = function (value){
    let node = new Node(value);
    let curren = this.head;
    
    if(!curren) this.head = node;

    while(curren.next){
        curren=curren.next;
    }
    curren.next = node;
}


LinkedList.prototype.view = function(node){
    if(!node.next) return "Ultimo"
    console.log(node.value, "nro ");
    return this.view(node.next)
    
}

let lalink = new LinkedList;
lalink.add(2);
lalink.add(3);
lalink.add(24);
lalink.add(21);
lalink.view(this.head);