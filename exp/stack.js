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
	/**
	 * We create a new node, set the new node's next property to the current top, set the top to the new
	 * node, and increment the length.
	 *
	 * If the length is 0, we set the bottom to the top.
	 *
	 * We return the stack.
	 * @param value - The value of the node to be added to the stack.
	 * @returns The stack itself.
	 */
	push(value) {
		const newNode = new Node(value);
		newNode.next = this.top;
		this.top = newNode;

		if (this.length === 0) this.bottom = this.top;
		this.length += 1;
		return this;
	}

	/**
	 * If the stack is empty, return null. If the stack has only one node, set the top and bottom to null
	 * and return the node. If the stack has more than one node, set the top to the next node and return
	 * the lead node.
	 * @returns The leadNode is being returned.
	 */
	pop() {
		const leadNode = this.top;

		if (this.length === 0) return null;
		if (this.top === this.bottom) {
			this.top = null;
			this.bottom = null;
			this.length = 0;
			return leadNode;
		}

		const childNode = this.top.next;
		this.top = childNode;
		this.length -= 1;
		return leadNode;
	}

	/**
	 * We create an empty array, then we create a variable called currentNode and set it equal to the top
	 * of the stack. Then we create a while loop that will run as long as currentNode is true. Inside the
	 * while loop we push the value of currentNode into the data array, then we set currentNode equal to
	 * the next node in the stack. Finally, we return the data array
	 * @returns The data array is being returned.
	 */
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
