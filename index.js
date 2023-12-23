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
}
