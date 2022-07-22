/* The Node class is a blueprint for creating node objects. Each node object has a left, right, and
value property. The left and right properties point to other node objects. The value property is a
primitive value that's unique for each node. */
class Node {
	constructor(value) {
		this.left = null;
		this.right = null;
		this.value = value;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
}
