def heapify(arr, n, i):
    largest = i  # 루트를 가장 큰 값으로 가정
    left = 2 * i + 1  # 왼쪽 자식
    right = 2 * i + 2  # 오른쪽 자식

    # 왼쪽 자식이 루트보다 크다면
    if left < n and arr[left] > arr[largest]:
        largest = left

    # 오른쪽 자식이 현재 가장 큰 값보다 크다면
    if right < n and arr[right] > arr[largest]:
        largest = right

    # 가장 큰 값이 루트가 아니라면 교환
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        # 힙을 다시 힙화
        heapify(arr, n, largest)

def heap_sort(arr):
    n = len(arr)

    # 최대 힙 구성
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)

    # 힙에서 원소를 하나씩 추출하여 정렬
    for i in range(n - 1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]  # 현재 루트를 끝으로 이동
        heapify(arr, i, 0)  # 줄어든 힙에 대해 힙화

# 예제 사용
arr = [64, 34, 25, 12, 22, 11, 90]
heap_sort(arr)
print("Sorted array:", arr)