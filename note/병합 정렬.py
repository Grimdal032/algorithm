def merge_sort(arr):
    if len(arr) < 2:
        return arr
    # Find the middle of the array
    mid = len(arr) // 2

    # Divide the array elements into 2 halves
    # Recursively sort the two halves
    left_half = merge_sort(arr[:mid])
    right_half = merge_sort(arr[mid:])

    i = j = 0
    merged_arr = []
    # Copy data to temp arrays L[] and R[]
    while i < len(left_half) and j < len(right_half):
        if left_half[i] < right_half[j]:
            merged_arr.append(left_half[i])
            i += 1
        else:
            merged_arr.append(right_half[j])
            j += 1

    # Check if any element was left
    merged_arr += left_half[i:]
    merged_arr += right_half[j:]
    return merged_arr

# Example usage
arr = [64, 34, 25, 12, 22, 11, 90]
sorted_arr = merge_sort(arr)
print("Sorted array:", sorted_arr)