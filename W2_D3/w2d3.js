class Laptop {
  constructor (processor, graphicCard, ram, display) {
    this.processor = processor || "intel celeron";
    this.graphicCard = graphicCard;
    this.ram = ram;
    this.display = display || 'retina';
  }
}



let lenovo = new Laptop("AMD Ryzen", "XEON", 4);
console.log(lenovo);
const asus = new Laptop("Intel core i5");
const fujitsu = new Laptop("OS Catalina", undefined , 25);
console.log(asus);
console.log(fujitsu);
const macbook = {
  tipe : "macbook pro m1",
  keyboard: "keychron",
  display: "retina"
}


// const list = {
//   head: { 
//       value: 6, 
//       next: { 
//           value: 10, 
//           next: { 
//               value: 12, 
//               next: { 
//                   value: 3, 
//                   next: null 
//                 }
//             } 
//         } 
//     },
// };

// console.log(list.head.value);
// console.log(list.head.next.value);
// console.log(list.head.next.next.next.next);
// console.log(typeof null);

// ! ngoding acil
// DOUBLY LINKED LIST

class LinkedList {
  constructor () {
    this.head = this.tail = null
  }

  // add to the end of the list / tail
  append(value) {
    // if list is empty
    if (!this.tail) {
      this.head = this.tail = new Node(value)
    }
    // if linkedlist has >= one node
    else {
      let oldTail = this.tail
      this.tail = new Node(value)
      oldTail.next = this.tail
      this.tail.prev = oldTail
    }
  }

  //add to beginning of list / head
  prepend(value) {
    // if list is empty
    if (!this.head) {
      this.head = this.tail = new Node(value)
    }
    // if linkedlist has >= one node
    else {
      let oldHead = this.head
      this.head = new Node(value)
      oldHead.prev = this.head
      this.head.next = oldHead
    }
  }

  deleteHead() {
    // if list is empty (no head)
    if (!this.head) {
      return null
    }
    // if linkedlist has >= 1 node
    else {
      let removedHead = this.head
      // if list has only 1 node left
      if (this.head === this.tail) {
        this.head = this.tail = null
      }
      //if list has >1 node
      else {
        this.head = this.head.next
        this.head.prev = null
      }
      return removedHead.value
    }
  }

  deleteTail() {
    // if list is empty (no tail)
    if (!this.tail) {
      return null
    }
    // if linkedlist has >= one node
    else {
      let removedTail = this.tail
      // if list has only 1 node left
      if (this.head === this.tail) {
        this.tail = this.head = null
      }
      //if list has >1 node
      else {
        this.tail = this.tail.prev
        this.tail.next = null
      }
      return removedTail.value
    }
  }

  search(value) {
    let currentNode = this.head

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode
      }
      currentNode = currentNode.next
    }

    return null
  }
}

class Node {
  constructor (value, prev, next) {
    this.value = value
    this.next = next || null
    this.prev = prev || null
  }
}

const list = new LinkedList()
console.log(list);

// console.log(list.append(1))
// list.append(2)
// list.append(3)

// list.prepend(0)
// list.prepend(-1)

// list.search(1) 
// list.search(3) 
// list.search(999) 

// list.deleteHead() // -1
// list.deleteTail() // 3
// list.deleteTail() // 2
// list.deleteHead() // 0

// list.deleteHead() // 1

// list.deleteTail() // null
// // ! cara lain 
// class Node {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

// class LinkedList {
//   constructor() {
//     (this.head = null), (this.size = 0);
//   }
//   insertFirst(value) {
//     this.head = new Node(value, this.head);
//     this.size++;
//   }
//   printListData() {
//     let current = this.head;
//     while (current) {
//       console.log(current.value);
//       current = current.next;
//     }
//   }
//   insertLast(value) {
//     let node = new Node(value, null);
//     let current;
//     if (!this.head) {
//       this.head = node;
//     } else {
//       current = this.head;
//       while (current.next) {
//         current = current.next;
//       }
//       current.next = node;
//     }
//     this.size++;
//   }
//   clearList() {
//     this.head = null;
//     this.size = 0;
//   }
//   insertAt(data, index) {
//     if (index > 0 && index > this.size) {
//       return;
//     }
//     if (index == 0) {
//       this.insertFirst(data);
//       return;
//     }
//     const node = new Node(data); // value = 17, next = null
//     let current, previous;

//     current = this.head;
//     let count = 0;
//     while (count < index) {
//       previous = current;
//       current = current.next;
//       count++;
//     }
//     node.next = current;
//     previous.next = node;
//     this.size++;
//   }
//   getAt(index) {
//     let current = this.head;
//     let count = 0;
//     while (count < index) {
//       current = current.next;
//       count++;
//     }
//     console.log(current.value);
//   }
//   removeAt(index) {
//     if (index > 0 && index > this.size) return;

//     let current = this.head,
//       previous,
//       count = 0;

//     if (index == 0) {
//       this.head = current.next;
//     } else {
//       while (count < index) {
//         count++;
//         previous = current;
//         current = current.next;
//       }
//       previous.next = current.next;
//     }
//     this.size--;
//   }
// }

// const list1 = new LinkedList();
// list1.insertFirst(10);
// list1.insertFirst(15);
// list1.insertFirst(20);
// list1.insertLast(5);
// list1.insertAt(17, 1);
// list1.printListData();
// console.log(JSON.stringify(list1));
// list1.removeAt(2);
