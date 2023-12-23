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
}
