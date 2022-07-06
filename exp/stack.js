class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}

	peek() {
		return this.top;
	}

	push(value) {
		const newNode = new Node(value);
		newNode.next = this.top;
		this.top = newNode;

		if (this.length === 0) this.bottom = this.top;
		this.length += 1;
		return this;
	}

	print() {
		const data = [];
		let currentNode = this.top;
		while (currentNode) {
			data.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return data;
	}
}
