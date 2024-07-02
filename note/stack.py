class Stack:
    def __init__(self):
        self.stack = []
    # 스택의 맨 위에 데이터를 추가함
    def push(self, item):
        self.stack.append(item)
    # 스택의 맨 위에 데이터를 제거하고 반환함
    def pop(self):
        if not self.is_empty():
            return self.stack.pop()
        else:
            raise IndexError("pop from empty stack")
    # 스택의 맨 위에 데이터를 제거하지 "않고" 반환
    def peek(self):
        if not self.is_empty():
            return self.stack[-1]
        else:
            raise IndexError("peek from empty stack")
    # 비어있는지 확인
    def is_empty(self):
        return len(self.stack) == 0
    # 스택의 크기
    def size(self):
        return len(self.stack)

# 스택 사용 예제
stack = Stack()
stack.push(1)
stack.push(2)
stack.push(3)
print(stack.pop())  # 출력: 3
print(stack.peek())  # 출력: 2
print(stack.is_empty())  # 출력: False
print(stack.size())  # 출력: 2
