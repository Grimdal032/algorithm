# 동일한 해시 값을 가지는 데이터를 연결 리스트로 저장.
# 해시 테이블의 각 요소가 연결 리스트를 가리키게 함.
class HashTable:
    def __init__(self):
        self.size = 10
        self.table = [[] for _ in range(self.size)]

    def hash_function(self, key):
        return hash(key) % self.size

    def insert(self, key, value):
        index = self.hash_function(key)
        self.table[index].append((key, value))

    def search(self, key):
        index = self.hash_function(key)
        for k, v in self.table[index]:
            if k == key:
                return v
        return None

    def delete(self, key):
        index = self.hash_function(key)
        for i, (k, v) in enumerate(self.table[index]):
            if k == key:
                del self.table[index][i]
                return True
        return False

# 예제 사용
hash_table = HashTable()
hash_table.insert("apple", 1)
hash_table.insert("banana", 2)
hash_table.insert("orange", 3)

print(hash_table.search("apple"))  # 출력: 1
print(hash_table.search("banana"))  # 출력: 2
print(hash_table.search("cherry"))  # 출력: None

hash_table.delete("banana")
print(hash_table.search("banana"))  # 출력: None