function LinkedList(){
    this.head = null;
}
function Node(value){
    this.value = value;
    this.next = null;
}

LinkedList.prototype.add = function(value){
    let elNode = new Node(value);
    let ult = this.head;
    while(!ult){
        ult = ult.next
    }
    ult.next = elNode
    return elNode
}
// hashTables




function HashTables(){
    this.array = [];
    this.numBuckets = 45;
}

HashTables.prototype.hash = function(key){
    let hash = 0;
    
    for (let i = key; i<key.length;i++){
        hash+=key.charCodeAt();
    }
    return hash % this.numBuckets
    
}

