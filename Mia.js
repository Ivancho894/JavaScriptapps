function BinarySearchTree(value) {
    this.root = value
    this.left = null
    this.right = null
 }
 BinarySearchTree.prototype.insert = function(value){
    if (value<this.root){
        this.left?this.left.insert(value):this.left=new BinarySearchTree(value);
    }else{
        this.right?this.right.insert(value):this.right = new BinarySearchTree(value);
    }

}
 
 BinarySearchTree.prototype.size = function(){
    let counter = 1;
    console.log(this.root)
    if(this.left)counter+=this.left.size();
    if(this.right)counter+=this.right.size();
    return counter
 }
 BinarySearchTree.prototype.depthFirstForEach = function(cb,pedido){
    if (pedido == 'in-order'){
       if (this.left && this.left.depthFirstForEach(cb,pedido));
       cb(this.root);
       if (this.right && this.right.depthFirstForEach(cb,pedido));
    }
    if (pedido == 'pre-order'){
       cb(this.root)
       if (this.left && this.left.depthFirstForEach(cb,pedido));
       if (this.right && this.right.depthFirstForEach(cb,pedido));
    }
    if (pedido == 'post-order'){
       if (this.left && this.left.depthFirstForEach(cb,pedido));
       if (this.right && this.right.depthFirstForEach(cb,pedido));
       cb(this.root)
    }
}
 
// BinarySearchTree.prototype.breadthFirstForEach = function(cb, arra = []) {
//     //array= []
//     if(this.left) {
//        arra.push(this.left);
//     }
 
//     if(this.right) {
//        arra.push(this.right);
//     }
 
//     cb(this.value);
//     console.log(miar)
 
//     if(array.length > 0) {
//        arra.shift().breadthFirstForEach(cb, arra);
//     }
//  }
BinarySearchTree.prototype.contains = function(value){
    let f = false
    if (this.root == value) {
        return true
    }
    f = this.left?this.left.contains(value):false;
    f = this.right?this.right.contains(value):false
    return f
}
BinarySearchTree.prototype.breadFirst = function(cb,arr = []){
    if (this.left){
        arr.push(this.left)
    }
    if (this.right){
        arr.push(this.right)
    }
    cb(this.root)
    if (arr.length > 0){
        arr.shift(this.breadthFirstForEach(cb,arr))
    }
}
let miar = new BinarySearchTree(3);
miar.insert(2)
 miar.insert(233)
 miar.insert(25)
 console.log(miar)
 console.log(miar.contains(23))
 console.log(miar.size())
 console.log(miar.size())
 let arr = [];
 let aerr = [];
 miar.depthFirstForEach(function(value){arr.push(value)},'post-order')
 miar.breadFirst(function(value){aerr.push(value)},'post-order')
 console.log(arr)
 console.log(aerr)