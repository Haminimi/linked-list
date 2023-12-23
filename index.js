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

	contains(value) {
		if (!this.head) {
			console.log('List is empty.');
			return null;
		} else {
			let current = this.head;
			while (current) {
				if (current.value === value) {
					console.log('True');
					return true;
				} else {
					current = current.next;
				}
			}
			console.log('False');
			return false;
		}
	}

	find(value) {
		if (!this.head) {
			console.log('List is empty.');
			return null;
		} else {
			let current = this.head;
			let index = 0;
			while (current) {
				if (current.value === value) {
					console.log(index);
					return index;
				} else {
					current = current.next;
					index += 1;
				}
			}
			console.log('List does not contains an element with that value.');
			return null;
		}
	}

	toString() {
		if (!this.head) {
			console.log('List is empty.');
			return null;
		} else {
			let current = this.head;
			let resultString = `(${current.value}) -> `;
			while (current.next) {
				resultString += `(${current.next.value}) -> `;
				current = current.next;
			}
			resultString += 'null';
			console.log(resultString);
			return resultString;
		}
	}

	insertAt(value, index) {
		if (!this.head) {
			this.prepend(value);
		} else {
			let prev;
			let current = this.head;
			let currentIndex = 0;

			while (current) {
				if (currentIndex === index) {
					if (index === 0) {
						this.prepend(value);
						return;
					} else {
						const temp = current;
						current = new Node(value);
						current.next = temp;
						prev.next = current;
						return;
					}
				} else {
					prev = current;
					current = current.next;
					currentIndex += 1;
				}
			}
		}
	}

	removeAt(index) {
		if (!this.head) {
			console.log('List is empty.');
			return null;
		} else {
			let current = this.head;
			let prev;
			let currentIndex = 0;

			while (current) {
				if (currentIndex === index) {
					if (index === 0) {
						current = current.next;
						return;
					} else {
						prev.next = current.next;
						return;
					}
				} else {
					prev = current;
					current = current.next;
					currentIndex += 1;
				}
			}
		}
	}
}

class Node {
	constructor(value = null, next = null) {
		this.value = value;
		this.next = next;
	}
}
