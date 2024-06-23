# 이진 탐색의 활용
# 중복된 값의 범위 찾기
# 1. Lower Bound
# 찾고자 하는 값 이상이 처음 나타나는 위치를 찾음

def lower_bound(arr, target):
    left, right = 0, len(arr)
    while left < right:
        mid = (left + right) // 2
        if arr[mid] < target:
            left = mid + 1
        else:
            right = mid
    return left

# 예제 사용
arr = [1, 2, 2, 2, 3, 4, 5]
target = 2
print("Lower bound of 2 is at index:", lower_bound(arr, target))  # 출력: 1
