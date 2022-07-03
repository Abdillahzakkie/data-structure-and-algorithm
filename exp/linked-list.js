class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor(value) {
		this.head = new Node(value);
		this.tail = this.head;
		this.length = 1;
	}

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
