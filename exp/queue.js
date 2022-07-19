/* A Node is a value and a pointer to the next Node. */
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

/* We create a class called Queue, which has a constructor that sets the first, last, and length
properties to null, and has methods called peek, enqueue, dequeue, and print */
class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}

	/**
	 * Peek() returns the first element in the queue
	 * @returns The first element in the queue.
	 */
	peek() {
		return this.first;
	}

	/**
	 * If the queue is empty, set the first and last nodes to the new node, otherwise set the last node's
	 * next property to the new node and set the last node to the new node.
	 * @param value - The value to be added to the queue.
	 * @returns The whole queue.
	 */
	enqueue(value) {
		const _newNode = new Node(value);
		switch (this.length) {
			case 0:
				this.first = _newNode;
				this.last = this.first;
				break;

			default:
				this.last.next = _newNode;
				this.last = _newNode;
				break;
		}
		this.length++;
		return this.length;
	}

	/**
	 * If the queue is empty, return null. If the queue has only one node, set the last node to null. Set
	 * the first node to the next node in the queue. Decrement the length of the queue. Return the node
	 * that was removed
	 * @returns The removed node in the queue.
	 */
	dequeue() {
		if (this.length === 0) return null;
		if (this.first === this.last) this.last = null;
		const _leadNode = this.first;
		this.first = _leadNode.next;
		this.length--;
		return _leadNode;
	}

	/**
	 * We create an empty array, then we create a variable that points to the first node in the queue,
	 * then we loop through the queue and push each node's value into the array, then we
	 * return the array
	 * @returns The data in the queue
	 */
	print() {
		const _data = [];
		let _currentNode = this.first;
		while (_currentNode) {
			_data.push(_currentNode.value);
			_currentNode = _currentNode.next;
		}
		console.log("_data", _data);
		return _data;
	}
}
