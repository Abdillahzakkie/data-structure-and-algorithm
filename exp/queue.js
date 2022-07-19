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
	 * @returns The length of the queue.
	 */
	enqueue(value) {
		const _newNode = new Node(value);
		if (this.length === 0) {
			this.first = _newNode;
			this.last = this.first;
			this.length++;
			return this.length;
		}
		this.last.next = _newNode;
		this.last = _newNode;
		this.length++;
	}
}
