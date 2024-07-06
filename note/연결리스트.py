class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class SinglyLinkedList:
    def __init__(self):
        self.head = None

    def is_empty(self):
        return self.head is None
    # 리시트 끝에 추가
    def append(self, data):
        new_node = Node(data)
        if self.is_empty():
            self.head = new_node
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = new_node
    # 리스트의 시작에 추가
    def prepend(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node
    # 특정 값을 가진 첫 번째 노드 제거
    def delete_with_value(self, data):
        if self.is_empty():
            return

        if self.head.data == data:
            self.head = self.head.next
            return

        current = self.head
        while current.next:
            if current.next.data == data:
                current.next = current.next.next
                return
            current = current.next

    def print_list(self):
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")

# 예제 사용
sll = SinglyLinkedList()
sll.append(1)
sll.append(2)
sll.append(3)
sll.print_list()  # 출력: 1 -> 2 -> 3 -> None
sll.prepend(0)
sll.print_list()  # 출력: 0 -> 1 -> 2 -> 3 -> None
sll.delete_with_value(2)
sll.print_list()  # 출력: 0 -> 1 -> 3 -> None
