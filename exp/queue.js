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
}
