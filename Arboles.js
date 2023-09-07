function BinarySearchTree(value) {
    this.value = value; // esto lo conocimos como this.root
    this.left = null;
    this.right = null;
 }
 
 BinarySearchTree.prototype.insert = function(value) { // 3
    if(value < this.value) { // 3 < 2 ???
       if(this.left) { // this.left !== null
          // si ya existe alguien en la rama izquierda
          this.left.insert(value);
       } else {
          // si no hay nadie en la rama izquierda
          this.left = new BinarySearchTree(value);
       }
    } else {
       // si es mayor o igual
       if(this.right) { // this.right !== null
          // si ya existe alguien en la rama izquierda
          this.right.insert(value);
       } else {
          // si no hay nadie en la rama izquierda
          this.right = new BinarySearchTree(value);
       }
    }
 }
 
 BinarySearchTree.prototype.size = function() {
    let counter = 1; // 6
 
    if(this.right) counter += this.right.size(); // 
    if(this.left) counter += this.left.size(); // 6
 
    return counter; // 6
 
    // counter = 4 --> en el contexto de TODO el arbol, es decir en la raiz 7
 }
 
 BinarySearchTree.prototype.contains = function(value) { // 1
    if(value === this.value) return true; // 1 === 2
 
    if(value < this.value) { // 1 < 2
       if(!this.left) return false;
       else return this.left.contains(value); // false
    }
 
    if(value > this.value) { // 
       if(!this.right) return false;
       else return this.right.contains(value); 
    }
 }
 
 
 BinarySearchTree.prototype.depthFirstForEach = function(cb, order) {
    // 'in-order' -> left, node, right
    // 'pre-order -> node, left, right
    // 'post-order' -> left, right, node
 
    if(order === 'in-order' || order === undefined) {
       if(this.left) this.left.depthFirstForEach(cb, order);
       cb(this.value);
       if(this.right) this.right.depthFirstForEach(cb, order);
    }
 
    if(order === 'pre-order') {
       cb(this.value);
       if(this.left) this.left.depthFirstForEach(cb, order);
       if(this.right) this.right.depthFirstForEach(cb, order);
    }
 
    if(order === 'post-order') {
       if(this.left) this.left.depthFirstForEach(cb, order);
       if(this.right) this.right.depthFirstForEach(cb, order);
       cb(this.value);
    }
 }
 
 
 BinarySearchTree.prototype.breadthFirstForEach = function(cb, array = []) {
    //array= []
    if(this.left) {
       array.push(this.left);
    }
 
    if(this.right) {
       array.push(this.right);
    }
 
    cb(this.value);
 
    if(array.length > 0) {
       array.shift().breadthFirstForEach(cb, array);
    }
 }
 
 
 
 const my_tree = new BinarySearchTree(7)
 my_tree.insert(2)
 my_tree.insert(5)
 my_tree.insert(12)
 console.log(my_tree)
 my_tree.insert(10)
 
 // let array = [] // [3, 5, 7, 8, 10, 12]
 // my_tree.depthFirstForEach(function(value){ array.push(value) })
 
 // let bfs = []; // [7, 5, 10, 3, 8, 12]
 // my_tree.breadthFirstForEach(function(value){ bfs.push(value) })
 