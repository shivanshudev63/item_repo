const { expect } = require('chai');
const { Item, LinkedList } = require('./itemLinkedList');

describe('LinkedList', () => {
  it('should add an item to the linked list', () => {
    const list = new LinkedList();
    const item1 = new Item('Item1', 10.0);
    const item2 = new Item('Item2', 20.0);

    list.append(item1);
    list.append(item2);

    let current = list.head;
    expect(current.item.itemName).to.equal('Item1');
    expect(current.item.price).to.equal(10.0);

    current = current.next;
    expect(current.item.itemName).to.equal('Item2');
    expect(current.item.price).to.equal(20.0);
  });
});
