def upper_bound(arr, target):
    left, right = 0, len(arr)
    while left < right:
        mid = (left + right) // 2
        if arr[mid] <= target:
            left = mid + 1
        else:
            right = mid
    return left

# 예제 사용
arr = [1, 2, 2, 2, 3, 4, 5]
target = 2
print("Upper bound of 2 is at index:", upper_bound(arr, target))  # 출력: 4
