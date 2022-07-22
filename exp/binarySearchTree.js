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

	insert(_value) {
		const _newNode = new Node(_value);
		if (this.root === null) {
			this.root = _newNode;
			return this;
		}

		let _currentNode = this.root;
		while (true) {
			if (_value < _currentNode.value) {
				if (!_currentNode.left) {
					_currentNode.left = _newNode;
					break;
				}
				_currentNode = _currentNode.left;
			} else {
				if (!_currentNode.right) {
					_currentNode.right = _newNode;
					break;
				}
				_currentNode = _currentNode.right;
			}
		}
		return this;
	}
}
