class Item {
  constructor(itemName, price) {
    this.itemName = itemName;
    this.price = price;
  }
}

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(item) {
    const newNode = new Node(item);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  display() {
    let current = this.head;
    while (current) {
      console.log(`Item Name: ${current.item.itemName}, Price: ${current.item.price}`);
      current = current.next;
    }
  }
}

module.exports = { Item, LinkedList };
