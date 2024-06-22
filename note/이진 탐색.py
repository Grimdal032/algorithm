# 정렬된 배열 또는 리스트에서 특정 값을 빠르게 찾는 효율적인 알고리즘
# 큰 데이터 셋에서 매우 빠르게 동작
# 시간 복잡도
# O(log n)

# 작동 원리
# 1. 중간 원소 선택
# 2. 비교 : 중간 원소와 찾고자 하는 값을 비교
# 중간 원소 = 값 : 검색 종료, 인덱스 반환
# 중간 원소 < 값 : 중간 원소의 오른쪽 절반으로 줄임
# 중간 원소 > 값 : 중간 원소의 왼쪽 절반으로 줄임
# 3. 반복

# 구현
# 1. 반복적 방법
def binary_search(arr, target):
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1  # 찾고자 하는 값이 배열에 없는 경우

# 예제 사용
arr = [2, 3, 4, 10, 40]
target = 10
result = binary_search(arr, target)
print(f"Element is present at index {result}" if result != -1 else "Element is not present in array")

# 2. 재귀적 방법

def binary_search_recursive(arr, target, left, right):
    if left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            return binary_search_recursive(arr, target, mid + 1, right)
        else:
            return binary_search_recursive(arr, target, left, mid - 1)
    else:
        return -1  # 찾고자 하는 값이 배열에 없는 경우

# 예제 사용
arr = [2, 3, 4, 10, 40]
target = 10
result = binary_search_recursive(arr, target, 0, len(arr) - 1)
print(f"Element is present at index {result}" if result != -1 else "Element is not present in array")
