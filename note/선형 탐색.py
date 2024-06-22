# 배열이나 리스트에서 특정 값을 찾기 위해 처음부터 끝까지 순차적으로 비교하는 방식
# 시간 복잡도
# 최선 O(1) 최악 O(n) 평균 O(n)

def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1  # 목표 값을 찾지 못한 경우

# 예제 사용
arr = [2, 3, 4, 10, 40]
target = 10
result = linear_search(arr, target)
print(f"Element is present at index {result}" if result != -1 else "Element is not present in array")
