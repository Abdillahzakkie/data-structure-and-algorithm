/* A Node is a value and a pointer to the next Node. */
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

/* The LinkedList class is a class that creates a linked list. */
class LinkedList {
	constructor(value) {
		this.head = new Node(value);
		this.tail = this.head;
		this.length = 1;
	}

	/**
	 * The append function takes in a value and creates a new node with that value. The new node is then
	 * assigned to the next property of the current tail. The tail is then reassigned to the new node. The
	 * length of the list is then incremented by 1
	 * @param value - The value of the node we want to add.
	 * @returns The linked list
	 */
	append(value) {
		const newNode = new Node(value);
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}

	prepend(value) {
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
	}

	traverseToIndex(index) {
		let counter = 0;
		let currentNode = this.head;

		while (counter !== index && currentNode !== null) {
			currentNode = currentNode.next;
			counter += 1;
		}
		return currentNode;
	}

	insert(index, value) {
		if (typeof index !== "number" || typeof value !== "number")
			throw new TypeError("index and value must be a number");

		if (index === 0) return this.prepend(value);
		else if (index >= this.length) return this.append(value);

		const newNode = new Node(value);
		const previousNode = this.traverseToIndex(index - 1);
		const nextNode = previousNode.next;
		this.length++;

		previousNode.next = newNode;
		newNode.next = nextNode;
	}

	delete(index) {
		if (typeof index !== "number")
			throw new TypeError("index and value must be a number");
		else if (index >= this.length) return this;

		if (index === 0) {
			const previousNode = this.head;
			this.head = previousNode.next;
			this.length--;
			return this;
		}

		const previousNode = this.traverseToIndex(index - 1);
		const nextNode = previousNode.next;
		previousNode.next = nextNode.next;
		this.length--;
		return this;
	}

	print() {
		const arrayValues = [];
		let currentNode = this.head;

		while (currentNode !== null) {
			arrayValues.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return arrayValues;
	}
}

const myLinkedList = new LinkedList(10);
