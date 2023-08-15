class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next; // 연결리스트의 tail 은 null을 가리킴
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  add(data) {
    const node = new Node(data);
    let current;

    if(this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while(current.next){  // tail 찾기
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  insertAt(data, index) { // 중간 삽입
    if(index < 0 || index >= this.size) {
      return -1;
    }
    // if first
    if(index === 0) {
      this.head = new Node(data, this.head);
      this.size++
      return;
    }
    const node = new Node(data);
    let current = this.head;
    let = prev;
    let count =0;
    while(count<index) {
      prev = current;
      current = current.next;
      count++;
    }
    node.next = current;
    prev.next = node;
    this.size++;
  }

  // 데이터 값을 찾고 인덱스를 리턴
  read(data) {
    let current= this.head;
    let count = 0;
    while(current!=null) {
      if(current.data === data) {
        return count;
      }
      current = current.next;
      count++;
    }
    return -1;  // not found
  }

  remove(data) {
    let current = this.head;
    let prev = null;
    while(current!=null) {
      if(current.data === data) {
        if(prev === null) { // head 일 경우
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.data;
      }
      prev = current;
      current = current.next;
    }
    return -1; // not found
  }

  // 인덱스를 기반으로 제거
  removeAt(index) {
    if(index <0 || index>=this.size) {
      return -1;
    }
    let current = this.head;
    let prev;
    let count = 0;
    if(index === 0) { // head
      this.head = current.next;
      return current.data;
    } else {
      while(count<index) {
        count++;
        prev = current;
        current = current.next;
      }
      prev.next = current.next;
      current.next = null;
    }
    this.size--;
    return current.data;
  }

  sizeOfList() {
    return this.size;
  }

  printList() {
    let current = this.head;
    let result = '';
    while(current) {
      result += current.data + ' -> ';
      current = current.next;
    }
    return result + 'null';
  }
}

let aa = new LinkedList();
aa.add(10);
aa.add(20);
aa.add(30);
console.log(aa.printList());
aa.remove(20);
console.log(aa.printList());
aa.insertAt(40, 0);
console.log(aa.printList());
console.log(aa.read(10));
aa.removeAt(1);
console.log(aa.printList());