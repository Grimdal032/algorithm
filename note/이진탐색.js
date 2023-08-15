// 데이터가 정렬되어 있는 배열에서 특정한 값을 찾아내는 알고리즘
// 배열의 중간에 있는 임의의 값을 선택하고 찾고자하는 값 x와 비교
// 1. x가 중간값보다 작으면 중간값을 기준으로 좌측의 데이터를 대상으로 함
// 2. x가 중간값보다 크면 중간값을 기준으로 우측의 데이터를 대상으로 함
// 찾을 때까지 반복
// 이진탐색(O(logN))은 단순한 배열 순회(O(N))보다 시간복잡도 상으로 크게 이점을 가짐

// 구현
const binarySearch = function(arr, target) {
  let start = 0;
  let end = arr.length-1;
  let mid

  while(start<=end) {
    mid = parseInt((start+end)/2);
    if(target === arr[mid]) {
      return mid;
    } else {
      if(target < arr[mid]) { // 좌측
        end = mid-1;
      } else {  // 우측
        start = mid+1;
      }
    }
  }
  return -1;
}

let output = binarySearch([1,2,3,4,5,6,7,8,9],2);
// 인덱스 값 반환
console.log(output);