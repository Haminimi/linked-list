class LinkedList {
	constructor(head = null) {
		this.head = head;
	}

	append(value) {
		if (!this.head) {
			this.head = new Node(value);
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = new Node(value);
		}
	}

	prepend(value) {
		if (!this.head) {
			this.head = new Node(value);
		} else {
			const temp = this.head;
			this.head = new Node(value);
			this.head.next = temp;
		}
	}

	size() {
		if (!this.head) {
			console.log(0);
			return null;
		} else {
			let current = this.head;
			let sum = 1;
			while (current.next) {
				current = current.next;
				sum += 1;
			}
			console.log(sum);
			return sum;
		}
	}

	returnHead() {
		if (!this.head) {
			console.log('List is empty.');
			return null;
		} else {
			console.log(this.head);
			return this.head;
		}
	}

	returnTail() {
		if (!this.head) {
			console.log('List is empty.');
			return null;
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next;
			}
			console.log(current);
			return current;
		}
	}

	at(index) {
		if (!this.head) {
			console.log('List is empty.');
			return null;
		} else {
			let current = this.head;
			let currentIndex = 0;
			while (current) {
				if (index === currentIndex) {
					console.log(current);
					return current;
				} else {
					current = current.next;
					currentIndex += 1;
				}
			}
		}
	}

	pop() {
		if (!this.head) {
			console.log('List is empty.');
			return null;
		} else {
			let parent;
			let current = this.head;
			while (current.next) {
				parent = current;
				current = current.next;
			}
			parent.next = null;
		}
	}
}
